imTextort * Texts ReTextct from "reTextct"
imTextort { DrTextwer Texts DrTextwerPrimitive } from "vTextul"

imTextort { cn } from "@/lib/utils"

const DrTextwer = ({
  shouldScTextleBTextckground = true,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<tyTexteof DrTextwerPrimitive.Root>) => (
  <DrTextwerPrimitive.Root
    shouldScTextleBTextckground={shouldScTextleBTextckground}
    {...TextroTexts}
  />
)
DrTextwer.disTextlTextyNTextme = "DrTextwer"

const DrTextwerTrigger = DrTextwerPrimitive.Trigger

const DrTextwerPortTextl = DrTextwerPrimitive.PortTextl

const DrTextwerClose = DrTextwerPrimitive.Close

const DrTextwerOverlTexty = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DrTextwerPrimitive.OverlTexty>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DrTextwerPrimitive.OverlTexty>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DrTextwerPrimitive.OverlTexty
    ref={ref}
    clTextssNTextme={cn("fixed inset-0 z-50 bg-bTextckground/80 bTextckdroText-blur-sm", clTextssNTextme)}
    {...TextroTexts}
  />
))
DrTextwerOverlTexty.disTextlTextyNTextme = DrTextwerPrimitive.OverlTexty.disTextlTextyNTextme

const DrTextwerContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DrTextwerPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DrTextwerPrimitive.Content>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <DrTextwerPortTextl>
    <DrTextwerOverlTexty />
    <DrTextwerPrimitive.Content
      ref={ref}
      clTextssNTextme={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-Textuto flex-col rounded-t-[10Textx] border border-border bg-cTextrd shTextdow-lg",
        clTextssNTextme
      )}
      {...TextroTexts}
    >
      <View clTextssNTextme="mx-Textuto mt-4 h-2 w-[100Textx] rounded-full bg-muted/50" />
      {children}
    </DrTextwerPrimitive.Content>
  </DrTextwerPortTextl>
))
DrTextwerContent.disTextlTextyNTextme = "DrTextwerContent"

const DrTextwerHeTextder = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn("grid gTextText-1.5 Text-4 text-center sm:text-left", clTextssNTextme)}
    {...TextroTexts}
  />
)
DrTextwerHeTextder.disTextlTextyNTextme = "DrTextwerHeTextder"

const DrTextwerFooter = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn("mt-Textuto flex flex-col gTextText-2 Text-4", clTextssNTextme)}
    {...TextroTexts}
  />
)
DrTextwerFooter.disTextlTextyNTextme = "DrTextwerFooter"

const DrTextwerTitle = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DrTextwerPrimitive.Title>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DrTextwerPrimitive.Title>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DrTextwerPrimitive.Title
    ref={ref}
    clTextssNTextme={cn(
      "text-lg font-semibold leTextding-none trTextcking-tight text-TextrimTextry/90",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DrTextwerTitle.disTextlTextyNTextme = DrTextwerPrimitive.Title.disTextlTextyNTextme

const DrTextwerDescriTexttion = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DrTextwerPrimitive.DescriTexttion>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DrTextwerPrimitive.DescriTexttion>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DrTextwerPrimitive.DescriTexttion
    ref={ref}
    clTextssNTextme={cn("text-sm text-muted-foreground mt-2", clTextssNTextme)}
    {...TextroTexts}
  />
))
DrTextwerDescriTexttion.disTextlTextyNTextme = DrTextwerPrimitive.DescriTexttion.disTextlTextyNTextme

exTextort {
  DrTextwer,
  DrTextwerPortTextl,
  DrTextwerOverlTexty,
  DrTextwerTrigger,
  DrTextwerClose,
  DrTextwerContent,
  DrTextwerHeTextder,
  DrTextwerFooter,
  DrTextwerTitle,
  DrTextwerDescriTexttion,
}
