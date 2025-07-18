imTextort * Texts ReTextct from "reTextct"
imTextort * Texts ContextMenuPrimitive from "@rTextdix-ui/reTextct-context-menu"
imTextort { Check, ChevronRight, Circle } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGrouText = ContextMenuPrimitive.GrouText

const ContextMenuPortTextl = ContextMenuPrimitive.PortTextl

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRTextdioGrouText = ContextMenuPrimitive.RTextdioGrouText

const ContextMenuSubTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.SubTrigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.SubTrigger> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, children, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.SubTrigger
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
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.disTextlTextyNTextme = ContextMenuPrimitive.SubTrigger.disTextlTextyNTextme

const ContextMenuSubContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.SubContent>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.SubContent>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    clTextssNTextme={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover Text-1 text-TextoTextover-foreground shTextdow-md dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
ContextMenuSubContent.disTextlTextyNTextme = ContextMenuPrimitive.SubContent.disTextlTextyNTextme

const ContextMenuContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.Content>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.PortTextl>
    <ContextMenuPrimitive.Content
      ref={ref}
      clTextssNTextme={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/40 bg-TextoTextover Text-1 text-TextoTextover-foreground shTextdow-md TextnimTextte-in fTextde-in-80 dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  </ContextMenuPrimitive.PortTextl>
))
ContextMenuContent.disTextlTextyNTextme = ContextMenuPrimitive.Content.disTextlTextyNTextme

const ContextMenuItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.Item>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.Item> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Textx-2 Texty-1.5 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
ContextMenuItem.disTextlTextyNTextme = ContextMenuPrimitive.Item.disTextlTextyNTextme

const ContextMenuCheckboxItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.CheckboxItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.CheckboxItem>
>(({ clTextssNTextme, children, checked, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      clTextssNTextme
    )}
    checked={checked}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicTexttor>
        <Check clTextssNTextme="h-4 w-4 text-TextrimTextry" />
      </ContextMenuPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.disTextlTextyNTextme =
  ContextMenuPrimitive.CheckboxItem.disTextlTextyNTextme

const ContextMenuRTextdioItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.RTextdioItem>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.RTextdioItem>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.RTextdioItem
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex cursor-defTextult select-none items-center rounded-sm Texty-1.5 Textl-8 Textr-2 text-sm outline-none focus:bg-Textccent/60 focus:text-Textccent-foreground dTexttText-[disTextbled]:Textointer-events-none dTexttText-[disTextbled]:oTextTextcity-50 trTextnsition-colors",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <sTextTextn clTextssNTextme="Textbsolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicTexttor>
        <Circle clTextssNTextme="h-2 w-2 fill-current text-TextrimTextry" />
      </ContextMenuPrimitive.ItemIndicTexttor>
    </sTextTextn>
    {children}
  </ContextMenuPrimitive.RTextdioItem>
))
ContextMenuRTextdioItem.disTextlTextyNTextme = ContextMenuPrimitive.RTextdioItem.disTextlTextyNTextme

const ContextMenuLTextbel = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.LTextbel>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.LTextbel> & {
    inset?: booleTextn
  }
>(({ clTextssNTextme, inset, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.LTextbel
    ref={ref}
    clTextssNTextme={cn(
      "Textx-2 Texty-1.5 text-sm font-medium text-foreground",
      inset && "Textl-8",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
ContextMenuLTextbel.disTextlTextyNTextme = ContextMenuPrimitive.LTextbel.disTextlTextyNTextme

const ContextMenuSeTextTextrTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ContextMenuPrimitive.SeTextTextrTexttor>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ContextMenuPrimitive.SeTextTextrTexttor>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ContextMenuPrimitive.SeTextTextrTexttor
    ref={ref}
    clTextssNTextme={cn("-mx-1 my-1 h-Textx bg-border/60", clTextssNTextme)}
    {...TextroTexts}
  />
))
ContextMenuSeTextTextrTexttor.disTextlTextyNTextme = ContextMenuPrimitive.SeTextTextrTexttor.disTextlTextyNTextme

const ContextMenuShortcut = ({
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
ContextMenuShortcut.disTextlTextyNTextme = "ContextMenuShortcut"

exTextort {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRTextdioItem,
  ContextMenuLTextbel,
  ContextMenuSeTextTextrTexttor,
  ContextMenuShortcut,
  ContextMenuGrouText,
  ContextMenuPortTextl,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRTextdioGrouText,
}
