# Step 2: design plan, before the rebuild

30 October 2026. Scope: the official brand, hero, facts strip and Start here. Stop after Step 3. The three entry points need real destinations, so this pass includes concise pathway pages and a visit/contact page. The remaining Home sections stay unpublished pending Step 4.

## Six named colours

| Name | Hex | Role |
| --- | --- | --- |
| Leaf green | `#29B14D` | Primary tour action with black text; original logo colour. |
| Crest purple | `#431448` | Navigation links, keyboard focus, occasional small headings; original logo colour. |
| Shield grey | `#E8E8EA` | Rules and field boundaries; original shield fill. |
| White | `#FFFFFF` | Main surface and logo background. |
| Black | `#000000` | Text; bottom photo gradient only where necessary for white text. |
| Purple mist | `#F6F3F6` | Quiet secondary surface, derived from purple and white. |

Exact extraction and provenance: `/content/brand.md`. Do not use cream, gold, sand or invented dark-jade. Keep all photographs in natural colour.

## Type

One family: self-hosted DM Sans. Weight 600 for the single-colour headline and entry-point headings; 400 for body, captions and factual information. The official crest contains its own original serif wordmark; do not try to match, remake or supplement it with a fabricated brand lockup. Remove Newsreader from the active page. Sentence case labels, normal tracking. Body copy 16px or larger where practical.

## Concept: the shared table

Lead with Jade's real glass-walled teaching space and round tables. A single, full-bleed classroom photograph is the main visual decision. It is not tinted. A shallow black gradient at its bottom supports the white headline and subline. No floating badges, logo repeats or editorial slogan above it.

Desktop:

```text
+-------------------------------------------------------------+
| Official crest        Starting school   IGCSE/A Levels       |
|                                      Fast Track  Book a tour |
+-------------------------------------------------------------+
|                                                             |
|     JADE'S REAL GLASS-WALLED CLASSROOM AND ROUND TABLE        |
|              full-bleed, natural-colour image                |
|                                                             |
| Workshop-style learning at Jade.                            |
| Glass-walled classrooms and round-table lessons in Colombo.  |
| [Book a tour]                                               |
+-------------------------------------------------------------+
| Caption: students discussing work beside the glass board     |
| Curriculum       Location        Entry stages                |
| Only verified fields; omit the unconfirmed next open day     |
+-------------------------------------------------------------+
| Start here.                                                 |
|                                                             |
| [large preschool photograph] | IGCSE and A Levels             |
| Starting school             | Qualifications + next step     |
| Preschool and primary       |_______________________________|
| Verified age if available   | Fast Track A Levels             |
| Next step / real page       | Duration + next step            |
+-------------------------------------------------------------+
```

Mobile:

```text
| Original crest          Book a tour  Menu |
| Full-bleed classroom photo               |
| Plain headline                          |
| One subline                             |
| Book a tour                             |
| Observed photo caption                  |
| Curriculum                              |
| Location                                |
| Entry stages                            |
| Start here                              |
| Preschool image + starting school       |
| IGCSE/A Levels, separated by a rule      |
| Fast Track A Levels, separated by a rule |
```

## Three principles

1. **Show the teaching setup.** A parent should see round tables and glass writing walls before reading a philosophy paragraph.
2. **Help a parent choose the next page.** Group by starting school, changing examination stage, or taking Fast Track. Publish verified entry details only; missing details produce no label, box or TODO.
3. **Keep evidence and claims together.** Photos get literal captions. Qualifications and contacts have recorded sources. No grade, age, deadline or outcome is invented.

## Self-critique and changes

The original 'premium serif + warm accent + aspirational slogan' could belong to any school. Rejected it. The replacement uses the actual green/purple crest, one utilitarian sans family and the school's own classroom.

A three-card grid would also be generic. Changed it to a larger starting-school entry with one real preschool photo, beside two compact examination-pathway entries. No identical rounded cards, numbers, icons or shadows.

'Learning that prepares you for the future' would say nothing distinctive. Replaced it with the factual 'Workshop-style learning at Jade' and a subline naming glass-walled rooms, circular tables and Colombo.

An announcement box for an unknown open day would look unfinished. Omit it completely while its content has `verify: true`. The same rule applies to unconfirmed entry ages, examination requirements and qualifications.

The green must not become an image wash. Restrict it to the tour button and the logo; leave the photograph's colour alone. Motion is one restrained page-load event, with no scrolling reveals, parallax, colour wash or horizontal pin in this review.

## Step 1 screenshot critique

Saved 390px and 1440px screenshots. The source crest and real colours are in place. The legacy headline still has an italic phrase, eyebrow labels and repeated arrows. Those are the specific failures Step 3 will remove. Logo source includes white margins; preserve the complete original image rather than cropping or redrawing it.

## Step 2 screenshot critique

This step is a written plan, so its 390px and 1440px captures intentionally show the same pre-rebuild state. The critique is unchanged: correcting colours alone did not make the composition school-specific. Implement the shared-table composition next.
