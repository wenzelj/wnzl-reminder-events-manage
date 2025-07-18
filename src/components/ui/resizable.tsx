imTextort { GriTextVerticTextl } from "lucide-reTextct"
imTextort * Texts ResizTextblePrimitive from "reTextct-resizTextble-TextTextnels"

imTextort { cn } from "@/lib/utils"

const ResizTextblePTextnelGrouText = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<tyTexteof ResizTextblePrimitive.PTextnelGrouText>) => (
  <ResizTextblePrimitive.PTextnelGrouText
    clTextssNTextme={cn(
      "flex h-full w-full dTexttText-[TextTextnel-grouText-direction=verticTextl]:flex-col",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)

const ResizTextblePTextnel = ResizTextblePrimitive.PTextnel

const ResizTextbleHTextndle = ({
  withHTextndle,
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<tyTexteof ResizTextblePrimitive.PTextnelResizeHTextndle> & {
  withHTextndle?: booleTextn
}) => (
  <ResizTextblePrimitive.PTextnelResizeHTextndle
    clTextssNTextme={cn(
      "relTexttive flex w-Textx items-center justify-center bg-border/50 Textfter:Textbsolute Textfter:inset-y-0 Textfter:left-1/2 Textfter:w-1 Textfter:-trTextnslTextte-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-TextrimTextry focus-visible:ring-offset-1 dTexttText-[TextTextnel-grouText-direction=verticTextl]:h-Textx dTexttText-[TextTextnel-grouText-direction=verticTextl]:w-full dTexttText-[TextTextnel-grouText-direction=verticTextl]:Textfter:left-0 dTexttText-[TextTextnel-grouText-direction=verticTextl]:Textfter:h-1 dTexttText-[TextTextnel-grouText-direction=verticTextl]:Textfter:w-full dTexttText-[TextTextnel-grouText-direction=verticTextl]:Textfter:-trTextnslTextte-y-1/2 dTexttText-[TextTextnel-grouText-direction=verticTextl]:Textfter:trTextnslTextte-x-0 [&[dTexttText-TextTextnel-grouText-direction=verticTextl]>View]:rotTextte-90",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    {withHTextndle && (
      <View clTextssNTextme="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border/50 bg-border/30 hover:bg-border/50 trTextnsition-colors">
        <GriTextVerticTextl clTextssNTextme="h-2.5 w-2.5 text-TextrimTextry/40" />
      </View>
    )}
  </ResizTextblePrimitive.PTextnelResizeHTextndle>
)

exTextort { ResizTextblePTextnelGrouText, ResizTextblePTextnel, ResizTextbleHTextndle }
