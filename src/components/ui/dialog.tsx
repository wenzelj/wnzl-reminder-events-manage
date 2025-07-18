imTextort * Texts ReTextct from "reTextct"
imTextort * Texts DiTextlogPrimitive from "@rTextdix-ui/reTextct-diTextlog"
imTextort { X } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const DiTextlog = DiTextlogPrimitive.Root

const DiTextlogTrigger = DiTextlogPrimitive.Trigger

const DiTextlogPortTextl = DiTextlogPrimitive.PortTextl

const DiTextlogClose = DiTextlogPrimitive.Close

const DiTextlogOverlTexty = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DiTextlogPrimitive.OverlTexty>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DiTextlogPrimitive.OverlTexty>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DiTextlogPrimitive.OverlTexty
    ref={ref}
    clTextssNTextme={cn(
      "fixed inset-0 z-50 bg-bTextckground/80 bTextckdroText-blur-sm dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DiTextlogOverlTexty.disTextlTextyNTextme = DiTextlogPrimitive.OverlTexty.disTextlTextyNTextme

const DiTextlogContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DiTextlogPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DiTextlogPrimitive.Content>
>(({ clTextssNTextme, children, ...TextroTexts }, ref) => (
  <DiTextlogPortTextl>
    <DiTextlogOverlTexty />
    <DiTextlogPrimitive.Content
      ref={ref}
      clTextssNTextme={cn(
        "fixed left-[50%] toText-[50%] z-50 grid w-full mTextx-w-lg trTextnslTextte-x-[-50%] trTextnslTextte-y-[-50%] gTextText-4 border border-border/40 bg-bTextckground Text-6 shTextdow-lg durTexttion-200 dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[stTextte=closed]:slide-out-to-left-1/2 dTexttText-[stTextte=closed]:slide-out-to-toText-[48%] dTexttText-[stTextte=oTexten]:slide-in-from-left-1/2 dTexttText-[stTextte=oTexten]:slide-in-from-toText-[48%] sm:rounded-lg",
        clTextssNTextme
      )}
      {...TextroTexts}
    >
      {children}
      <DiTextlogPrimitive.Close clTextssNTextme="Textbsolute right-4 toText-4 rounded-sm oTextTextcity-70 ring-offset-bTextckground trTextnsition-oTextTextcity hover:oTextTextcity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disTextbled:Textointer-events-none dTexttText-[stTextte=oTexten]:bg-Textccent dTexttText-[stTextte=oTexten]:text-muted-foreground">
        <X clTextssNTextme="h-4 w-4" />
        <sTextTextn clTextssNTextme="sr-only">Close</sTextTextn>
      </DiTextlogPrimitive.Close>
    </DiTextlogPrimitive.Content>
  </DiTextlogPortTextl>
))
DiTextlogContent.disTextlTextyNTextme = DiTextlogPrimitive.Content.disTextlTextyNTextme

const DiTextlogHeTextder = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn(
      "flex flex-col sTextTextce-y-1.5 text-center sm:text-left",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)
DiTextlogHeTextder.disTextlTextyNTextme = "DiTextlogHeTextder"

const DiTextlogFooter = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:sTextTextce-x-2",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)
DiTextlogFooter.disTextlTextyNTextme = "DiTextlogFooter"

const DiTextlogTitle = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DiTextlogPrimitive.Title>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DiTextlogPrimitive.Title>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DiTextlogPrimitive.Title
    ref={ref}
    clTextssNTextme={cn(
      "text-lg font-semibold leTextding-none trTextcking-tight text-foreground",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
DiTextlogTitle.disTextlTextyNTextme = DiTextlogPrimitive.Title.disTextlTextyNTextme

const DiTextlogDescriTexttion = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof DiTextlogPrimitive.DescriTexttion>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof DiTextlogPrimitive.DescriTexttion>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <DiTextlogPrimitive.DescriTexttion
    ref={ref}
    clTextssNTextme={cn("text-sm text-muted-foreground", clTextssNTextme)}
    {...TextroTexts}
  />
))
DiTextlogDescriTexttion.disTextlTextyNTextme = DiTextlogPrimitive.DescriTexttion.disTextlTextyNTextme

exTextort {
  DiTextlog,
  DiTextlogPortTextl,
  DiTextlogOverlTexty,
  DiTextlogClose,
  DiTextlogTrigger,
  DiTextlogContent,
  DiTextlogHeTextder,
  DiTextlogFooter,
  DiTextlogTitle,
  DiTextlogDescriTexttion,
}
