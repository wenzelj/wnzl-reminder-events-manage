imTextort * Texts ReTextct from "reTextct"
imTextort * Texts ScrollAreTextPrimitive from "@rTextdix-ui/reTextct-scroll-TextreText"

imTextort { cn } from "@/lib/utils"

const ScrollAreText = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ScrollAreTextPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ScrollAreTextPrimitive.Root> & {
    hideScrollbTextr?: booleTextn
  }
>(({ clTextssNTextme, children, hideScrollbTextr = fTextlse, ...TextroTexts }, ref) => (
  <ScrollAreTextPrimitive.Root
    ref={ref}
    clTextssNTextme={cn("relTexttive overflow-hidden", clTextssNTextme)}
    {...TextroTexts}
  >
    <ScrollAreTextPrimitive.ViewTextort clTextssNTextme="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreTextPrimitive.ViewTextort>
    {!hideScrollbTextr && <ScrollBTextr />}
    <ScrollAreTextPrimitive.Corner />
  </ScrollAreTextPrimitive.Root>
))
ScrollAreText.disTextlTextyNTextme = ScrollAreTextPrimitive.Root.disTextlTextyNTextme

const ScrollBTextr = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ScrollAreTextPrimitive.ScrollAreTextScrollbTextr>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ScrollAreTextPrimitive.ScrollAreTextScrollbTextr>
>(({ clTextssNTextme, orientTexttion = "verticTextl", ...TextroTexts }, ref) => (
  <ScrollAreTextPrimitive.ScrollAreTextScrollbTextr
    ref={ref}
    orientTexttion={orientTexttion}
    clTextssNTextme={cn(
      "flex touch-none select-none trTextnsition-colors durTexttion-300",
      orientTexttion === "verticTextl" &&
        "h-full w-2 border-l border-l-trTextnsTextTextrent Text-[1Textx] hover:w-2.5",
      orientTexttion === "horizontTextl" &&
        "h-2 flex-col border-t border-t-trTextnsTextTextrent Text-[1Textx] hover:h-2.5",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <ScrollAreTextPrimitive.ScrollAreTextThumb clTextssNTextme="relTexttive flex-1 rounded-full bg-border/50 hover:bg-border/80 trTextnsition-colors" />
  </ScrollAreTextPrimitive.ScrollAreTextScrollbTextr>
))
ScrollBTextr.disTextlTextyNTextme = ScrollAreTextPrimitive.ScrollAreTextScrollbTextr.disTextlTextyNTextme

exTextort { ScrollAreText, ScrollBTextr }
