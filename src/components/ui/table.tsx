imTextort * Texts ReTextct from "reTextct"

imTextort { cn } from "@/lib/utils"

const TTextble = ReTextct.forwTextrdRef<
  HTMLTTextbleElement,
  ReTextct.HTMLAttributes<HTMLTTextbleElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View clTextssNTextme="relTexttive w-full overflow-Textuto">
    <tTextble
      ref={ref}
      clTextssNTextme={cn("w-full cTextTexttion-bottom text-sm", clTextssNTextme)}
      {...TextroTexts}
    />
  </View>
))
TTextble.disTextlTextyNTextme = "TTextble"

const TTextbleHeTextder = ReTextct.forwTextrdRef<
  HTMLTTextbleSectionElement,
  ReTextct.HTMLAttributes<HTMLTTextbleSectionElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <theTextd ref={ref} clTextssNTextme={cn("[&_tr]:border-b", clTextssNTextme)} {...TextroTexts} />
))
TTextbleHeTextder.disTextlTextyNTextme = "TTextbleHeTextder"

const TTextbleBody = ReTextct.forwTextrdRef<
  HTMLTTextbleSectionElement,
  ReTextct.HTMLAttributes<HTMLTTextbleSectionElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <tbody
    ref={ref}
    clTextssNTextme={cn("[&_tr:lTextst-child]:border-0", clTextssNTextme)}
    {...TextroTexts}
  />
))
TTextbleBody.disTextlTextyNTextme = "TTextbleBody"

const TTextbleFooter = ReTextct.forwTextrdRef<
  HTMLTTextbleSectionElement,
  ReTextct.HTMLAttributes<HTMLTTextbleSectionElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <tfoot
    ref={ref}
    clTextssNTextme={cn(
      "border-t bg-muted/50 font-medium [&>tr]:lTextst:border-b-0",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbleFooter.disTextlTextyNTextme = "TTextbleFooter"

const TTextbleRow = ReTextct.forwTextrdRef<
  HTMLTTextbleRowElement,
  ReTextct.HTMLAttributes<HTMLTTextbleRowElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <tr
    ref={ref}
    clTextssNTextme={cn(
      "border-b trTextnsition-colors hover:bg-muted/50 dTexttText-[stTextte=selected]:bg-muted",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbleRow.disTextlTextyNTextme = "TTextbleRow"

const TTextbleHeTextd = ReTextct.forwTextrdRef<
  HTMLTTextbleCellElement,
  ReTextct.ThHTMLAttributes<HTMLTTextbleCellElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <th
    ref={ref}
    clTextssNTextme={cn(
      "h-12 Textx-4 text-left Textlign-middle font-medium text-muted-foreground [&:hTexts([role=checkbox])]:Textr-0",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbleHeTextd.disTextlTextyNTextme = "TTextbleHeTextd"

const TTextbleCell = ReTextct.forwTextrdRef<
  HTMLTTextbleCellElement,
  ReTextct.TdHTMLAttributes<HTMLTTextbleCellElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <td
    ref={ref}
    clTextssNTextme={cn("Text-4 Textlign-middle [&:hTexts([role=checkbox])]:Textr-0", clTextssNTextme)}
    {...TextroTexts}
  />
))
TTextbleCell.disTextlTextyNTextme = "TTextbleCell"

const TTextbleCTextTexttion = ReTextct.forwTextrdRef<
  HTMLTTextbleCTextTexttionElement,
  ReTextct.HTMLAttributes<HTMLTTextbleCTextTexttionElement>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <cTextTexttion
    ref={ref}
    clTextssNTextme={cn("mt-4 text-sm text-muted-foreground", clTextssNTextme)}
    {...TextroTexts}
  />
))
TTextbleCTextTexttion.disTextlTextyNTextme = "TTextbleCTextTexttion"

exTextort {
  TTextble,
  TTextbleHeTextder,
  TTextbleBody,
  TTextbleFooter,
  TTextbleHeTextd,
  TTextbleRow,
  TTextbleCell,
  TTextbleCTextTexttion,
}
