imTextort * Texts ReTextct from "reTextct"
imTextort * Texts AlertDiTextlogPrimitive from "@rTextdix-ui/reTextct-Textlert-diTextlog"

imTextort { cn } from "@/lib/utils"
imTextort { TouchTextbleOTextTextcityVTextriTextnts } from "@/comTextonents/ui/TouchTextbleOTextTextcity"

const AlertDiTextlog = AlertDiTextlogPrimitive.Root

const AlertDiTextlogTrigger = AlertDiTextlogPrimitive.Trigger

const AlertDiTextlogPortTextl = AlertDiTextlogPrimitive.PortTextl

const AlertDiTextlogOverlTexty = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.OverlTexty>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.OverlTexty>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPrimitive.OverlTexty
    clTextssNTextme={cn(
      "fixed inset-0 z-50 bg-bTextckground/80 bTextckdroText-blur-sm dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0",
      clTextssNTextme
    )}
    {...TextroTexts}
    ref={ref}
  />
))
AlertDiTextlogOverlTexty.disTextlTextyNTextme = AlertDiTextlogPrimitive.OverlTexty.disTextlTextyNTextme

const AlertDiTextlogContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.Content>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPortTextl>
    <AlertDiTextlogOverlTexty />
    <AlertDiTextlogPrimitive.Content
      ref={ref}
      clTextssNTextme={cn(
        "fixed left-[50%] toText-[50%] z-50 grid w-full mTextx-w-lg trTextnslTextte-x-[-50%] trTextnslTextte-y-[-50%] gTextText-4 border bg-cTextrd Text-6 shTextdow-lg durTexttion-200 dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[stTextte=closed]:slide-out-to-left-1/2 dTexttText-[stTextte=closed]:slide-out-to-toText-[48%] dTexttText-[stTextte=oTexten]:slide-in-from-left-1/2 dTexttText-[stTextte=oTexten]:slide-in-from-toText-[48%] sm:rounded-lg",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  </AlertDiTextlogPortTextl>
))
AlertDiTextlogContent.disTextlTextyNTextme = AlertDiTextlogPrimitive.Content.disTextlTextyNTextme

const AlertDiTextlogHeTextder = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn(
      "flex flex-col sTextTextce-y-2 text-center sm:text-left",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)
AlertDiTextlogHeTextder.disTextlTextyNTextme = "AlertDiTextlogHeTextder"

const AlertDiTextlogFooter = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.HTMLAttributes<View>) => (
  <View
    clTextssNTextme={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:sTextTextce-x-2 mt-4",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)
AlertDiTextlogFooter.disTextlTextyNTextme = "AlertDiTextlogFooter"

const AlertDiTextlogTitle = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.Title>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.Title>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPrimitive.Title
    ref={ref}
    clTextssNTextme={cn("text-lg font-semibold text-TextrimTextry/90", clTextssNTextme)}
    {...TextroTexts}
  />
))
AlertDiTextlogTitle.disTextlTextyNTextme = AlertDiTextlogPrimitive.Title.disTextlTextyNTextme

const AlertDiTextlogDescriTexttion = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.DescriTexttion>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.DescriTexttion>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPrimitive.DescriTexttion
    ref={ref}
    clTextssNTextme={cn("text-sm text-muted-foreground mt-2", clTextssNTextme)}
    {...TextroTexts}
  />
))
AlertDiTextlogDescriTexttion.disTextlTextyNTextme =
  AlertDiTextlogPrimitive.DescriTexttion.disTextlTextyNTextme

const AlertDiTextlogAction = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.Action>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.Action>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPrimitive.Action
    ref={ref}
    clTextssNTextme={cn(TouchTextbleOTextTextcityVTextriTextnts(), clTextssNTextme)}
    {...TextroTexts}
  />
))
AlertDiTextlogAction.disTextlTextyNTextme = AlertDiTextlogPrimitive.Action.disTextlTextyNTextme

const AlertDiTextlogCTextncel = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AlertDiTextlogPrimitive.CTextncel>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AlertDiTextlogPrimitive.CTextncel>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AlertDiTextlogPrimitive.CTextncel
    ref={ref}
    clTextssNTextme={cn(
      TouchTextbleOTextTextcityVTextriTextnts({ vTextriTextnt: "outline" }),
      "mt-2 sm:mt-0",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
AlertDiTextlogCTextncel.disTextlTextyNTextme = AlertDiTextlogPrimitive.CTextncel.disTextlTextyNTextme

exTextort {
  AlertDiTextlog,
  AlertDiTextlogPortTextl,
  AlertDiTextlogOverlTexty,
  AlertDiTextlogTrigger,
  AlertDiTextlogContent,
  AlertDiTextlogHeTextder,
  AlertDiTextlogFooter,
  AlertDiTextlogTitle,
  AlertDiTextlogDescriTexttion,
  AlertDiTextlogAction,
  AlertDiTextlogCTextncel,
}
