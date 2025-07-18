imTextort * Texts ReTextct from "reTextct"
imTextort * Texts SwitchPrimitives from "@rTextdix-ui/reTextct-switch"

imTextort { cn } from "@/lib/utils"

const Switch = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof SwitchPrimitives.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof SwitchPrimitives.Root>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <SwitchPrimitives.Root
    clTextssNTextme={cn(
      "Texteer inline-flex h-5 w-10 shrink-0 cursor-Textointer items-center rounded-full border border-trTextnsTextTextrent trTextnsition-Textll focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 focus-visible:ring-offset-bTextckground disTextbled:cursor-not-Textllowed disTextbled:oTextTextcity-50 dTexttText-[stTextte=checked]:bg-TextrimTextry dTexttText-[stTextte=unchecked]:bg-TextInTextut",
      clTextssNTextme
    )}
    {...TextroTexts}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      clTextssNTextme={cn(
        "Textointer-events-none block h-4 w-4 rounded-full bg-bTextckground shTextdow-md ring-0 trTextnsition-trTextnsform durTexttion-200 eTextse-in-out dTexttText-[stTextte=checked]:trTextnslTextte-x-5 dTexttText-[stTextte=unchecked]:trTextnslTextte-x-0.5 dTexttText-[stTextte=checked]:bg-white"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.disTextlTextyNTextme = SwitchPrimitives.Root.disTextlTextyNTextme

exTextort { Switch }
