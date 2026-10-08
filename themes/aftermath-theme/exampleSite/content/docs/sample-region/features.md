---
title: "Features"
tagline: "A page with every shortcode"
classification: "Restricted"
toc: true
weight: 10
---

## Memo header

{{< memo ref="MP-001" to="Team Leader" from="Project Command" date="1987-05-14" subject="Recovery directive" >}}

## Callouts

{{< callout >}}
A plain note. Markdown works inside, including **bold** and `code`.
{{< /callout >}}

{{< callout type="warning" title="Hazard" >}}
Warnings take the stamp red.
{{< /callout >}}

## Classified block

{{< classified level="Eyes only" >}}
Text you want presented as a restricted file. A second paragraph works too.

- Lists work
- Inside the block
{{< /classified >}}

## Terminal and redaction

{{< terminal title="VAULT STATUS" >}}
> STATUS ......... NOMINAL
> TEMPERATURE .... -196 C
> CYCLE .......... 14,602 DAYS
{{< /terminal >}}

The location was {{< redact >}}withheld by order{{< /redact >}}. Hover or focus the black bar to read it. {{< stamp "Declassified" >}} sits inline.
