#!/usr/bin/env python3
"""
プロジェクト構造リファクタリングスクリプト

このスクリプトは、現在のフラットなコンポーネント構造を
機能ベースの構造に再編成します。

使用方法:
    python reorganize.py --dry-run  # ドライラン（実際には移動しない）
    python reorganize.py            # 実際に移動を実行
"""

import os
import shutil
import argparse
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Tuple
import json

# 移動マッピング: (現在のパス, 新しいパス, カテゴリ)
MOVE_MAPPING = [
    # 機能コンポーネント
    ("src/components/Hero.tsx", "src/features/hero/Hero.tsx", "feature"),
    ("src/components/Problems.tsx", "src/features/problems/Problems.tsx", "feature"),
    ("src/components/Benefits.tsx", "src/features/benefits/Benefits.tsx", "feature"),
    ("src/components/Achievements.tsx", "src/features/achievements/Achievements.tsx", "feature"),
    ("src/components/RoiSection.tsx", "src/features/roi/RoiSection.tsx", "feature"),
    ("src/components/Testimonials.tsx", "src/features/testimonials/Testimonials.tsx", "feature"),
    ("src/components/Founder.tsx", "src/features/founder/Founder.tsx", "feature"),
    ("src/components/Seminar.tsx", "src/features/seminar/Seminar.tsx", "feature"),
    ("src/components/AiAdvisor.tsx", "src/features/ai-advisor/AiAdvisor.tsx", "feature"),
    ("src/components/ContactForm.tsx", "src/features/contact/ContactForm.tsx", "feature"),
    
    # 共通UIコンポーネント
    ("src/components/CTAButton.tsx", "src/shared/ui/CTAButton.tsx", "shared"),
    ("src/components/Pill.tsx", "src/shared/ui/Pill.tsx", "shared"),
    ("src/components/Section.tsx", "src/shared/ui/Section.tsx", "shared"),
    
    # レイアウトコンポーネント
    ("src/components/Header.tsx", "src/shared/layout/Header.tsx", "shared"),
    ("src/components/ProgressBar.tsx", "src/shared/layout/ProgressBar.tsx", "shared"),
]

# import文の更新マッピング
IMPORT_UPDATES = {
    # App.tsx の更新
    "src/App.tsx": [
        (r'from "./components/Hero"', 'from "./features/hero/Hero"'),
        (r'from "./components/Problems"', 'from "./features/problems/Problems"'),
        (r'from "./components/Benefits"', 'from "./features/benefits/Benefits"'),
        (r'from "./components/Achievements"', 'from "./features/achievements/Achievements"'),
        (r'from "./components/RoiSection"', 'from "./features/roi/RoiSection"'),
        (r'from "./components/Testimonials"', 'from "./features/testimonials/Testimonials"'),
        (r'from "./components/Founder"', 'from "./features/founder/Founder"'),
        (r'from "./components/Seminar"', 'from "./features/seminar/Seminar"'),
        (r'from "./components/AiAdvisor"', 'from "./features/ai-advisor/AiAdvisor"'),
        (r'from "./components/ContactForm"', 'from "./features/contact/ContactForm"'),
        (r'from "./components/ProgressBar"', 'from "./shared/layout/ProgressBar"'),
        (r'from "./components/Header"', 'from "./shared/layout/Header"'),
    ],
    # 機能コンポーネント内の共通UIコンポーネント参照の更新
    "shared_ui_imports": [
        (r'from "./CTAButton"', 'from "../../shared/ui/CTAButton"'),
        (r'from "./Pill"', 'from "../../shared/ui/Pill"'),
        (r'from "./Section"', 'from "../../shared/ui/Section"'),
    ],
}


class Reorganizer:
    def __init__(self, dry_run: bool = False):
        self.dry_run = dry_run
        self.project_root = Path(__file__).parent
        self.log_entries: List[Dict] = []
        self.conflicts: List[Dict] = []
        
    def log(self, message: str, level: str = "INFO"):
        """ログエントリを記録"""
        entry = {
            "timestamp": datetime.now().isoformat(),
            "level": level,
            "message": message
        }
        self.log_entries.append(entry)
        prefix = "🔍 [DRY-RUN] " if self.dry_run else ""
        print(f"{prefix}[{level}] {message}")
    
    def ensure_directory(self, path: Path):
        """ディレクトリが存在することを確認（作成）"""
        if not path.exists():
            if not self.dry_run:
                path.mkdir(parents=True, exist_ok=True)
            self.log(f"Created directory: {path}")
    
    def check_conflicts(self, src: Path, dst: Path) -> bool:
        """同名ファイルの競合をチェック"""
        if dst.exists() and dst != src:
            conflict = {
                "source": str(src),
                "destination": str(dst),
                "timestamp": datetime.now().isoformat()
            }
            self.conflicts.append(conflict)
            self.log(f"⚠️  CONFLICT: {dst} already exists!", "WARN")
            return True
        return False
    
    def move_file(self, src: Path, dst: Path) -> bool:
        """ファイルを移動（競合チェック付き）"""
        if not src.exists():
            self.log(f"⚠️  Source file not found: {src}", "WARN")
            return False
        
        if self.check_conflicts(src, dst):
            # 競合時はタイムスタンプ付きバックアップ名を生成
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            stem = dst.stem
            suffix = dst.suffix
            backup_dst = dst.parent / f"{stem}_{timestamp}{suffix}"
            self.log(f"   → Using backup name: {backup_dst}", "INFO")
            dst = backup_dst
        
        self.ensure_directory(dst.parent)
        
        if not self.dry_run:
            shutil.move(str(src), str(dst))
            self.log(f"✅ Moved: {src} → {dst}")
        else:
            self.log(f"Would move: {src} → {dst}")
        
        return True
    
    def update_imports(self, file_path: Path, updates: List[Tuple[str, str]]):
        """ファイル内のimport文を更新"""
        if not file_path.exists():
            self.log(f"⚠️  File not found for import update: {file_path}", "WARN")
            return
        
        try:
            content = file_path.read_text(encoding='utf-8')
            original_content = content
            
            for old_pattern, new_pattern in updates:
                if old_pattern in content:
                    content = content.replace(old_pattern, new_pattern)
                    self.log(f"   Updated import: {old_pattern} → {new_pattern}")
            
            if content != original_content:
                if not self.dry_run:
                    file_path.write_text(content, encoding='utf-8')
                    self.log(f"✅ Updated imports in: {file_path}")
                else:
                    self.log(f"Would update imports in: {file_path}")
        except Exception as e:
            self.log(f"❌ Error updating imports in {file_path}: {e}", "ERROR")
    
    def update_feature_imports(self, feature_file: Path):
        """機能コンポーネント内の共通UIコンポーネント参照を更新"""
        if not feature_file.exists() and not self.dry_run:
            return
        
        try:
            # ドライラン時はファイルが存在しない可能性があるので、パスから推測
            if feature_file.exists():
                content = feature_file.read_text(encoding='utf-8')
            else:
                # ドライラン時は仮の内容でパス計算のみ
                content = ""
            
            original_content = content
            
            # 機能コンポーネントの深さに応じて相対パスを計算
            # src/features/hero/Hero.tsx -> ../../shared/ui/
            relative_to_src = feature_file.relative_to(self.project_root / "src")
            depth = len(relative_to_src.parts) - 1  # features/hero/Hero.tsx -> 2
            relative_path = "../" * depth + "shared/ui/"
            
            updates = [
                (r'from "./CTAButton"', f'from "{relative_path}CTAButton"'),
                (r'from "./Pill"', f'from "{relative_path}Pill"'),
                (r'from "./Section"', f'from "{relative_path}Section"'),
            ]
            
            for old_pattern, new_pattern in updates:
                if old_pattern in content:
                    content = content.replace(old_pattern, new_pattern)
                    self.log(f"   Updated import in {feature_file.name}: {old_pattern} → {new_pattern}")
            
            if content != original_content and feature_file.exists():
                if not self.dry_run:
                    feature_file.write_text(content, encoding='utf-8')
                    self.log(f"✅ Updated imports in: {feature_file}")
                else:
                    self.log(f"Would update imports in: {feature_file}")
        except Exception as e:
            self.log(f"❌ Error updating feature imports in {feature_file}: {e}", "ERROR")
    
    def execute(self):
        """リファクタリングを実行"""
        self.log("=" * 60)
        self.log("🚀 Starting project reorganization...")
        self.log("=" * 60)
        
        # 1. ファイルの移動
        self.log("\n📦 Step 1: Moving files...")
        moved_files = []
        
        for src_str, dst_str, category in MOVE_MAPPING:
            src = self.project_root / src_str
            dst = self.project_root / dst_str
            
            if self.move_file(src, dst):
                moved_files.append((src, dst, category))
        
        # 2. App.tsxのimport更新
        self.log("\n📝 Step 2: Updating imports in App.tsx...")
        app_tsx = self.project_root / "src/App.tsx"
        if app_tsx.exists():
            self.update_imports(app_tsx, IMPORT_UPDATES["src/App.tsx"])
        
        # 3. 機能コンポーネント内のimport更新
        self.log("\n📝 Step 3: Updating imports in feature components...")
        for src_str, dst_str, category in MOVE_MAPPING:
            if category == "feature":
                # 移動前のファイルを更新（移動後はパスが変わるため）
                src = self.project_root / src_str
                dst = self.project_root / dst_str
                # 移動後なのでdstを更新
                if dst.exists() or self.dry_run:
                    self.update_feature_imports(dst)
        
        # 4. 空になったcomponentsディレクトリの削除
        self.log("\n🧹 Step 4: Cleaning up empty directories...")
        components_dir = self.project_root / "src/components"
        if components_dir.exists():
            try:
                remaining_files = list(components_dir.glob("*.tsx"))
                if not remaining_files:
                    if not self.dry_run:
                        components_dir.rmdir()
                        self.log(f"✅ Removed empty directory: {components_dir}")
                    else:
                        self.log(f"Would remove empty directory: {components_dir}")
                else:
                    self.log(f"⚠️  Directory not empty, remaining files: {[f.name for f in remaining_files]}")
            except Exception as e:
                self.log(f"⚠️  Could not remove directory: {e}", "WARN")
        
        # 5. 結果のサマリー
        self.log("\n" + "=" * 60)
        self.log("📊 Summary")
        self.log("=" * 60)
        self.log(f"Files moved: {len(moved_files)}")
        self.log(f"Conflicts: {len(self.conflicts)}")
        
        if self.conflicts:
            self.log("\n⚠️  Conflicts detected:")
            for conflict in self.conflicts:
                self.log(f"   - {conflict['destination']}")
        
        # 6. ログファイルの出力
        log_file = self.project_root / f"reorganize_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        log_data = {
            "timestamp": datetime.now().isoformat(),
            "dry_run": self.dry_run,
            "moved_files": [{"source": str(s), "destination": str(d), "category": c} 
                          for s, d, c in moved_files],
            "conflicts": self.conflicts,
            "log_entries": self.log_entries
        }
        
        if not self.dry_run:
            log_file.write_text(json.dumps(log_data, indent=2, ensure_ascii=False), encoding='utf-8')
            self.log(f"\n📄 Log saved to: {log_file}")
        
        self.log("\n✅ Reorganization complete!")
        if self.dry_run:
            self.log("\n💡 Run without --dry-run to execute the changes.")


def main():
    parser = argparse.ArgumentParser(
        description="Reorganize project structure to feature-based architecture"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Perform a dry run without making actual changes"
    )
    
    args = parser.parse_args()
    
    reorganizer = Reorganizer(dry_run=args.dry_run)
    reorganizer.execute()


if __name__ == "__main__":
    main()

