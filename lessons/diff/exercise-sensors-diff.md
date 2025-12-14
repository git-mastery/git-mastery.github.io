<!-- steps for creating the companion repo:

take gm-sensors
git init
echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git stage .
git commit -m "Record data for Jan 01"

echo -e "4821\n9304\n1528\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9744\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8721\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 02"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 03"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3560\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7350\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1230\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1590\n6830" > south.csv
git commit -am "Record data for Jan 04"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4399\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4199\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 05"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4328\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5304\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1379\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1385\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 06"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7245\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8237\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 07"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9298\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 08"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9022\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7655\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 09"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3471\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3278\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 10"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n1918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n4401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 11"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7485\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8501\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 12"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3638\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4330\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 13"

echo -e "4820\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5190\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8897" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6830" > south.csv
git commit -am "Record data for Jan 14"

echo -e "4821\n9304\n1578\n6042\n7189\n2463\n8931\n5710\n4428\n3097\n8652\n1904\n7285\n6379\n5140\n9836\n2057\n4719\n3568\n8243" > east.csv
echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3648\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7592\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8890" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4530\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6831" > south.csv
git commit -am "Record data for Jan 15"

echo -e "5193\n8042\n6721\n4389\n2075\n9510\n3642\n7281\n5904\n1837\n4416\n9032\n7765\n6208\n3589\n8471\n2940\n1683\n7352\n5129" > west.csv
echo -e "6841\n2307\n9754\n4169\n5823\n3086\n7590\n8420\n1679\n5034\n2918\n7645\n8301\n4576\n9208\n3461\n5789\n6940\n1235\n8890" > north.csv
echo -e "7412\n5068\n8921\n3754\n2809\n6197\n4531\n9674\n1185\n7326\n5401\n8937\n2640\n7083\n5914\n3208\n8745\n4069\n1592\n6831" > south.csv

git stage north.csv

---

Which are the new values in staged files?
7590

Which are the new values in changed but unstaged files?
4531 3642

Which files have changed from Jan 09th to Jan 15th?
north.csv south.csv west.csv

Which new values are new in north.csv on Jan 10th, compared to Jan 01st?
3471

------

What's sum of values in south.csv on Jan 11th?
awk '{s+=$1} END {print s}' south.csv

What's sum of values in west.csv on Jan 09th?

What's sum of values in north.csv on Jan 05th?

-------

Discard last two commits entirely.
Discard next three commits but keep the changes in the working directory (not staged).
Discard next two commits, but keep the changes staged.

-------

Revert the record of Jan 14th
Also rever that of Jan 13th

-->
{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, os_tabs_marker, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_detour_preview, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_steps_tabs, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<div id="scenario" class="d-none">

A system is using Git to record data received daily from for sensors, each monitoring one of directions east, west, north, south. Each sensor provides 20 integer values, which are stored in a csv file (e.g., values from the sensor monitoring the east direction are recorded as `east.csv`). Data for each day is recorded as one commit.
</div>

<div id="task" class="d-none">

Examine the revision history to answer the following questions.

**Q:** Which are the new values in staged files?

**Q:** Which are the new values in modified but unstaged files?

**Q:** Which files have changed from Jan 09th to Jan 15th?

**Q:** Which new values are new in north.csv on Jan 10th, compared to Jan 01st?
</div>

{{ show_exercise(exercises.sensors_diff, is_panel=0) }}

