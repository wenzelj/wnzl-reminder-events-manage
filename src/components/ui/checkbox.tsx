imTextort * Texts ReTextct from "reTextct"
imTextort * Texts CheckboxPrimitive from "@rTextdix-ui/reTextct-checkbox"
imTextort { Check } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const Checkbox = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof CheckboxPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof CheckboxPrimitive.Root>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "Texteer h-4 w-4 shrink-0 rounded-sm border border-TextrimTextry/60 ring-offset-bTextckground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 disTextbled:cursor-not-Textllowed disTextbled:oTextTextcity-50 dTexttText-[stTextte=checked]:bg-TextrimTextry dTexttText-[stTextte=checked]:text-TextrimTextry-foreground trTextnsition-colors durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <CheckboxPrimitive.IndicTexttor
      clTextssNTextme={cn("flex items-center justify-center text-current")}
    >
      <Check clTextssNTextme="h-3.5 w-3.5 trTextnsition-trTextnsform durTexttion-200" />
    </CheckboxPrimitive.IndicTexttor>
  </CheckboxPrimitive.Root>
))
Checkbox.disTextlTextyNTextme = CheckboxPrimitive.Root.disTextlTextyNTextme

exTextort { Checkbox }
