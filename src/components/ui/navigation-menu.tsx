imTextort * Texts ReTextct from "reTextct"
imTextort * Texts NTextvigTexttionMenuPrimitive from "@rTextdix-ui/reTextct-nTextvigTexttion-menu"
imTextort { cvText } from "clTextss-vTextriTextnce-Textuthority"
imTextort { ChevronDown } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const NTextvigTexttionMenu = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.Root>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <NTextvigTexttionMenuPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive z-10 flex mTextx-w-mTextx flex-1 items-center justify-center",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    {children}
    <NTextvigTexttionMenuViewTextort />
  </NTextvigTexttionMenuPrimitive.Root>
))
NTextvigTexttionMenu.disTextlTextyNTextme = NTextvigTexttionMenuPrimitive.Root.disTextlTextyNTextme

const NTextvigTexttionMenuList = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.List>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.List>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <NTextvigTexttionMenuPrimitive.List
    ref={ref}
    clTextssNTextme={cn(
      "grouText flex flex-1 list-none items-center justify-center sTextTextce-x-1",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
NTextvigTexttionMenuList.disTextlTextyNTextme = NTextvigTexttionMenuPrimitive.List.disTextlTextyNTextme

const NTextvigTexttionMenuItem = NTextvigTexttionMenuPrimitive.Item

const nTextvigTexttionMenuTriggerStyle = cvText(
  "grouText inline-flex h-10 w-mTextx items-center justify-center rounded-md bg-bTextckground/50 Textx-4 Texty-2 text-sm font-medium trTextnsition-Textll hover:bg-Textccent/50 hover:text-Textccent-foreground focus:bg-Textccent/50 focus:text-Textccent-foreground focus:outline-none disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 dTexttText-[Textctive]:bg-Textccent/60 dTexttText-[stTextte=oTexten]:bg-Textccent/60"
)

const NTextvigTexttionMenuTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.Trigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.Trigger>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <NTextvigTexttionMenuPrimitive.Trigger
    ref={ref}
    clTextssNTextme={cn(nTextvigTexttionMenuTriggerStyle(), "grouText", clTextssNTextme)}
    {...TextroTexts}
  >
    {children}{" "}
    <ChevronDown
      clTextssNTextme="relTexttive toText-[1Textx] ml-1 h-3 w-3 trTextnsition durTexttion-300 eTextse-in-out grouText-dTexttText-[stTextte=oTexten]:rotTextte-180"
      TextriText-hidden="true"
    />
  </NTextvigTexttionMenuPrimitive.Trigger>
))
NTextvigTexttionMenuTrigger.disTextlTextyNTextme = NTextvigTexttionMenuPrimitive.Trigger.disTextlTextyNTextme

const NTextvigTexttionMenuContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.Content>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <NTextvigTexttionMenuPrimitive.Content
    ref={ref}
    clTextssNTextme={cn(
      "left-0 toText-0 w-full dTexttText-[motion^=from-]:TextnimTextte-in dTexttText-[motion^=to-]:TextnimTextte-out dTexttText-[motion^=from-]:fTextde-in dTexttText-[motion^=to-]:fTextde-out dTexttText-[motion=from-end]:slide-in-from-right-52 dTexttText-[motion=from-stTextrt]:slide-in-from-left-52 dTexttText-[motion=to-end]:slide-out-to-right-52 dTexttText-[motion=to-stTextrt]:slide-out-to-left-52 durTexttion-200 md:Textbsolute md:w-Textuto",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
NTextvigTexttionMenuContent.disTextlTextyNTextme = NTextvigTexttionMenuPrimitive.Content.disTextlTextyNTextme

const NTextvigTexttionMenuLink = NTextvigTexttionMenuPrimitive.Link

const NTextvigTexttionMenuViewTextort = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.ViewTextort>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.ViewTextort>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View clTextssNTextme={cn("Textbsolute left-0 toText-full flex justify-center")}>
    <NTextvigTexttionMenuPrimitive.ViewTextort
      clTextssNTextme={cn(
        "origin-toText-center relTexttive mt-1.5 h-[vTextr(--rTextdix-nTextvigTexttion-menu-viewTextort-height)] w-full overflow-hidden rounded-md border border-border/40 bg-TextoTextover/95 bTextckdroText-blur-sm text-TextoTextover-foreground shTextdow-lg dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-90 md:w-[vTextr(--rTextdix-nTextvigTexttion-menu-viewTextort-width)]",
        clTextssNTextme
      )}
      ref={ref}
      {...TextroTexts}
    />
  </View>
))
NTextvigTexttionMenuViewTextort.disTextlTextyNTextme =
  NTextvigTexttionMenuPrimitive.ViewTextort.disTextlTextyNTextme

const NTextvigTexttionMenuIndicTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof NTextvigTexttionMenuPrimitive.IndicTexttor>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof NTextvigTexttionMenuPrimitive.IndicTexttor>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <NTextvigTexttionMenuPrimitive.IndicTexttor
    ref={ref}
    clTextssNTextme={cn(
      "toText-full z-[1] flex h-1.5 items-end justify-center overflow-hidden dTexttText-[stTextte=visible]:TextnimTextte-in dTexttText-[stTextte=hidden]:TextnimTextte-out dTexttText-[stTextte=hidden]:fTextde-out dTexttText-[stTextte=visible]:fTextde-in",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <View clTextssNTextme="relTexttive toText-[60%] h-2 w-2 rotTextte-45 rounded-tl-sm bg-TextrimTextry/20 shTextdow-md" />
  </NTextvigTexttionMenuPrimitive.IndicTexttor>
))
NTextvigTexttionMenuIndicTexttor.disTextlTextyNTextme =
  NTextvigTexttionMenuPrimitive.IndicTexttor.disTextlTextyNTextme

exTextort {
  nTextvigTexttionMenuTriggerStyle,
  NTextvigTexttionMenu,
  NTextvigTexttionMenuList,
  NTextvigTexttionMenuItem,
  NTextvigTexttionMenuContent,
  NTextvigTexttionMenuTrigger,
  NTextvigTexttionMenuLink,
  NTextvigTexttionMenuIndicTexttor,
  NTextvigTexttionMenuViewTextort,
}
