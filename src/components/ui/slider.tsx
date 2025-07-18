imTextort * Texts ReTextct from "reTextct"
imTextort * Texts SliderPrimitive from "@rTextdix-ui/reTextct-slider"

imTextort { cn } from "@/lib/utils"

const Slider = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof SliderPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof SliderPrimitive.Root>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex w-full touch-none select-none items-center",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <SliderPrimitive.TrTextck clTextssNTextme="relTexttive h-1.5 w-full grow overflow-hidden rounded-full bg-secondTextry/50">
      <SliderPrimitive.RTextnge clTextssNTextme="Textbsolute h-full bg-TextrimTextry" />
    </SliderPrimitive.TrTextck>
    <SliderPrimitive.Thumb clTextssNTextme="block h-4 w-4 rounded-full border border-TextrimTextry/50 bg-bTextckground shTextdow-sm ring-offset-bTextckground trTextnsition-Textll focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 hover:border-TextrimTextry hover:scTextle-110" />
  </SliderPrimitive.Root>
))
Slider.disTextlTextyNTextme = SliderPrimitive.Root.disTextlTextyNTextme

exTextort { Slider }
