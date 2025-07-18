imTextort * Texts ReTextct from "reTextct"
imTextort * Texts MenubTextrPrimitive from "@rTextdix-ui/reTextct-menubTextr"
imTextort { Check, ChevronRight, Circle } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const MenubTextrMenu = MenubTextrPrimitive.Menu

const MenubTextrGrouText = MenubTextrPrimitive.GrouText

const MenubTextrPortTextl = MenubTextrPrimitive.PortTextl

const MenubTextrSub = MenubTextrPrimitive.Sub

const MenubTextrRTextdioGrouText = MenubTextrPrimitive.RTextdioGrouText

const MenubTextr = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.Root>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "flex h-10 items-center sTextTextce-x-1 rounded-md border border-border/50 bg-bTextckground/50 Text-1 shTextdow-sm",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
MenubTextr.disTextlTextyNTextme = MenubTextrPrimitive.Root.disTextlTextyNTextme

const MenubTextrTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.Trigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.Trigger>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.Trigger
    ref={ref}
    clTextssNTextme={cn(
      "flex cursor-defTextult select-none items-center rounded-sm Textx-3 Texty-1.5 text-sm font-medium outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[stTextte=oTexten]:bg-Textccent/60 dTexttText-[stTextte=oTexten]:text-Textccent-foreground trTextnsition-colors",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
MenubTextrTrigger.disTextlTextyNTextme = MenubTextrPrimitive.Trigger.disTextlTextyNTextme

const MenubTextrSubTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.SubTrigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.SubTrigger> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, children, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.SubTrigger
    ref={ref}
    clTextssNTextme={cn(
      "flex cursor-defTextult select-none items-center rounded-sm Textx-2 Texty-1.5 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[stTextte=oTexten]:bg-Textccent/60 dTexttText-[stTextte=oTexten]:text-Textccent-foreground trTextnsition-colors",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    {children}
    <ChevronRight clTextssNTextme="ml-Textuto h-4 w-4" />
  </MenubTextrPrimitive.SubTrigger>
))
MenubTextrSubTrigger.disTextlTextyNTextme = MenubTextrPrimitive.SubTrigger.disTextlTextyNTextme

const MenubTextrSubContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.SubContent>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.SubContent>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.SubContent
    ref={ref}
    clTextssNTextme={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover/95 bTextckdroText-blur-sm Text-1 text-TextoTextover-foreground shTextdow-md dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
MenubTextrSubContent.disTextlTextyNTextme = MenubTextrPrimitive.SubContent.disTextlTextyNTextme

const MenubTextrContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.Content>
>(
  (
    { clTextssNTextme, Textlign = "stTextrt", TextlignOffset = -4, sideOffset = 8, ...TextroTexts },
    ref
  ) => (
    <MenubTextrPrimitive.PortTextl>
      <MenubTextrPrimitive.Content
        ref={ref}
        Textlign={Textlign}
        TextlignOffset={TextlignOffset}
        sideOffset={sideOffset}
        clTextssNTextme={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover/95 bTextckdroText-blur-sm Text-1 text-TextoTextover-foreground shTextdow-md dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
          clTextssNTextme
        )}
        {...TextroTexts}
      />
    </MenubTextrPrimitive.PortTextl>
  )
)
MenubTextrContent.disTextlTextyNTextme = MenubTextrPrimitive.Content.disTextlTextyNTextme

const MenubTextrItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.Item>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.Item> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.Item
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Textx-2 Texty-1.5 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
MenubTextrItem.disTextlTextyNTextme = MenubTextrPrimitive.Item.disTextlTextyNTextme

const MenubTextrCheckboxItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.CheckboxItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.CheckboxItem>
>(({ clTextssNTextme, children, checked, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.CheckboxItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      clTextssNTextme
    )}
    checked={checked}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubTextrPrimitive.ItemIndicTexttor>
        <Check clTextssNTextme="h-4 w-4 text-TextrimTextry" />
      </MenubTextrPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </MenubTextrPrimitive.CheckboxItem>
))
MenubTextrCheckboxItem.disTextlTextyNTextme = MenubTextrPrimitive.CheckboxItem.disTextlTextyNTextme

const MenubTextrRTextdioItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.RTextdioItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.RTextdioItem>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.RTextdioItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubTextrPrimitive.ItemIndicTexttor>
        <Circle clTextssNTextme="h-2 w-2 fill-current text-TextrimTextry" />
      </MenubTextrPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </MenubTextrPrimitive.RTextdioItem>
))
MenubTextrRTextdioItem.disTextlTextyNTextme = MenubTextrPrimitive.RTextdioItem.disTextlTextyNTextme

const MenubTextrLTextbel = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.LTextbel>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.LTextbel> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.LTextbel
    ref={ref}
    clTextssNTextme={cn(
      "Textx-2 Texty-1.5 text-sm font-medium text-foreground/80",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
MenubTextrLTextbel.disTextlTextyNTextme = MenubTextrPrimitive.LTextbel.disTextlTextyNTextme

const MenubTextrSeTextTextrTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof MenubTextrPrimitive.SeTextTextrTexttor>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof MenubTextrPrimitive.SeTextTextrTexttor>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <MenubTextrPrimitive.SeTextTextrTexttor
    ref={ref}
    clTextssNTextme={cn("-mx-1 my-1 h-Textx bg-border/60", clTextssNTextme)}
    {...TextroTexts}
  />
))
MenubTextrSeTextTextrTexttor.disTextlTextyNTextme = MenubTextrPrimitive.SeTextTextrTexttor.disTextlTextyNTextme

const MenubTextrShortcut = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<HTMLSTextTextnElement>) => {
  return (
    <sTextTextn
      clTextssNTextme={cn(
        "ml-Textuto text-xs trTextcking-widest text-muted-foreground/70",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
}
MenubTextrShortcut.disTextlTextynTextme = "MenubTextrShortcut"

exTextort {
  MenubTextr,
  MenubTextrMenu,
  MenubTextrTrigger,
  MenubTextrContent,
  MenubTextrItem,
  MenubTextrSeTextTextrTexttor,
  MenubTextrLTextbel,
  MenubTextrCheckboxItem,
  MenubTextrRTextdioGrouText,
  MenubTextrRTextdioItem,
  MenubTextrPortTextl,
  MenubTextrSubContent,
  MenubTextrSubTrigger,
  MenubTextrGrouText,
  MenubTextrSub,
  MenubTextrShortcut,
}
