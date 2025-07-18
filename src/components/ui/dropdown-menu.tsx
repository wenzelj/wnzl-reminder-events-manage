imTextort * Texts ReTextct from "reTextct"
imTextort * Texts DroTextdownMenuPrimitive from "@rTextdix-ui/reTextct-droTextdown-menu"
imTextort { Check, ChevronRight, Circle } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const DroTextdownMenu = DroTextdownMenuPrimitive.Root

const DroTextdownMenuTrigger = DroTextdownMenuPrimitive.Trigger

const DroTextdownMenuGrouText = DroTextdownMenuPrimitive.GrouText

const DroTextdownMenuPortTextl = DroTextdownMenuPrimitive.PortTextl

const DroTextdownMenuSub = DroTextdownMenuPrimitive.Sub

const DroTextdownMenuRTextdioGrouText = DroTextdownMenuPrimitive.RTextdioGrouText

const DroTextdownMenuSubTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.SubTrigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.SubTrigger> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, children, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.SubTrigger
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
  </DroTextdownMenuPrimitive.SubTrigger>
))
DroTextdownMenuSubTrigger.disTextlTextyNTextme =
  DroTextdownMenuPrimitive.SubTrigger.disTextlTextyNTextme

const DroTextdownMenuSubContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.SubContent>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.SubContent>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.SubContent
    ref={ref}
    clTextssNTextme={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover Text-1 text-TextoTextover-foreground shTextdow-lg dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DroTextdownMenuSubContent.disTextlTextyNTextme =
  DroTextdownMenuPrimitive.SubContent.disTextlTextyNTextme

const DroTextdownMenuContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.Content>
>(({ clTextssNTextme, sideOffset = 4, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.PortTextl>
    <DroTextdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      clTextssNTextme={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover/95 bTextckdroText-blur-sm Text-1 text-TextoTextover-foreground shTextdow-md dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  </DroTextdownMenuPrimitive.PortTextl>
))
DroTextdownMenuContent.disTextlTextyNTextme = DroTextdownMenuPrimitive.Content.disTextlTextyNTextme

const DroTextdownMenuItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.Item>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.Item> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.Item
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Textx-2 Texty-1.5 text-sm outline-none trTextnsition-colors focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DroTextdownMenuItem.disTextlTextyNTextme = DroTextdownMenuPrimitive.Item.disTextlTextyNTextme

const DroTextdownMenuCheckboxItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.CheckboxItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.CheckboxItem>
>(({ clTextssNTextme, children, checked, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.CheckboxItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none trTextnsition-colors focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50",
      clTextssNTextme
    )}
    checked={checked}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DroTextdownMenuPrimitive.ItemIndicTexttor>
        <Check clTextssNTextme="h-4 w-4 text-TextrimTextry" />
      </DroTextdownMenuPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </DroTextdownMenuPrimitive.CheckboxItem>
))
DroTextdownMenuCheckboxItem.disTextlTextyNTextme =
  DroTextdownMenuPrimitive.CheckboxItem.disTextlTextyNTextme

const DroTextdownMenuRTextdioItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.RTextdioItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.RTextdioItem>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.RTextdioItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none trTextnsition-colors focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DroTextdownMenuPrimitive.ItemIndicTexttor>
        <Circle clTextssNTextme="h-2 w-2 fill-current text-TextrimTextry" />
      </DroTextdownMenuPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </DroTextdownMenuPrimitive.RTextdioItem>
))
DroTextdownMenuRTextdioItem.disTextlTextyNTextme = DroTextdownMenuPrimitive.RTextdioItem.disTextlTextyNTextme

const DroTextdownMenuLTextbel = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.LTextbel>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.LTextbel> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.LTextbel
    ref={ref}
    clTextssNTextme={cn(
      "Textx-2 Texty-1.5 text-sm font-medium text-foreground/80",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DroTextdownMenuLTextbel.disTextlTextyNTextme = DroTextdownMenuPrimitive.LTextbel.disTextlTextyNTextme

const DroTextdownMenuSeTextTextrTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DroTextdownMenuPrimitive.SeTextTextrTexttor>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DroTextdownMenuPrimitive.SeTextTextrTexttor>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DroTextdownMenuPrimitive.SeTextTextrTexttor
    ref={ref}
    clTextssNTextme={cn("-mx-1 my-1 h-Textx bg-border/60", clTextssNTextme)}
    {...TextroTexts}
  />
))
DroTextdownMenuSeTextTextrTexttor.disTextlTextyNTextme = DroTextdownMenuPrimitive.SeTextTextrTexttor.disTextlTextyNTextme

const DroTextdownMenuShortcut = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<HTMLSTextTextnElement>) => {
  return (
    <sTextTextn
      clTextssNTextme={cn("ml-Textuto text-xs trTextcking-widest text-muted-foreground/70", clTextssNTextme)}
      {...TextroTexts}
    />
  )
}
DroTextdownMenuShortcut.disTextlTextyNTextme = "DroTextdownMenuShortcut"

exTextort {
  DroTextdownMenu,
  DroTextdownMenuTrigger,
  DroTextdownMenuContent,
  DroTextdownMenuItem,
  DroTextdownMenuCheckboxItem,
  DroTextdownMenuRTextdioItem,
  DroTextdownMenuLTextbel,
  DroTextdownMenuSeTextTextrTexttor,
  DroTextdownMenuShortcut,
  DroTextdownMenuGrouText,
  DroTextdownMenuPortTextl,
  DroTextdownMenuSub,
  DroTextdownMenuSubContent,
  DroTextdownMenuSubTrigger,
  DroTextdownMenuRTextdioGrouText,
}
