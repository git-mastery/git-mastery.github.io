#!/usr/bin/env python3
"""Print the Git-Mastery lesson order from common/macros.njk."""

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[4]
MACROS = ROOT / "common" / "macros.njk"

TOUR_RE = re.compile(
    r"(?P<key>\w+):\s*\{\s*folder:\s*\"(?P<folder>[^\"]+)\",\s*"
    r"title:\s*\"(?P<title>[^\"]+)\",\s*lessons:\s*\{(?P<lessons>.*?)\n\s*\}\n\s*\}",
    re.DOTALL,
)
LESSON_RE = re.compile(
    r"(?P<key>\w+):\s*\{title:\s*\"(?P<title>[^\"]+)\",\s*"
    r"tour_name:\s*\"(?P<tour>[^\"]+)\",\s*lesson_name:\s*\"(?P<lesson>[^\"]+)\"\}"
)


def main() -> None:
    source = MACROS.read_text(encoding="utf-8")
    for tour_match in TOUR_RE.finditer(source):
        print(tour_match.group("title"))
        for lesson_match in LESSON_RE.finditer(tour_match.group("lessons")):
            print(f"  - {lesson_match.group('title')} [{lesson_match.group('lesson')}]")


if __name__ == "__main__":
    main()
