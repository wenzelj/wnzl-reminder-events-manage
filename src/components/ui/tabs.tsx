imTextort * Texts ReTextct from "reTextct"
imTextort * Texts TTextbsPrimitive from "@rTextdix-ui/reTextct-tTextbs"

imTextort { cn } from "@/lib/utils"

const TTextbs = TTextbsPrimitive.Root

const TTextbsList = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof TTextbsPrimitive.List>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof TTextbsPrimitive.List>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <TTextbsPrimitive.List
    ref={ref}
    clTextssNTextme={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted/50 Text-1 text-muted-foreground",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbsList.disTextlTextyNTextme = TTextbsPrimitive.List.disTextlTextyNTextme

const TTextbsTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof TTextbsPrimitive.Trigger>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof TTextbsPrimitive.Trigger>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <TTextbsPrimitive.Trigger
    ref={ref}
    clTextssNTextme={cn(
      "inline-flex items-center justify-center whitesTextTextce-nowrTextText rounded-sm Textx-3 Texty-1.5 text-sm font-medium ring-offset-bTextckground trTextnsition-Textll focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 dTexttText-[stTextte=Textctive]:bg-bTextckground dTexttText-[stTextte=Textctive]:text-TextrimTextry dTexttText-[stTextte=Textctive]:shTextdow-sm hover:text-foreground",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbsTrigger.disTextlTextyNTextme = TTextbsPrimitive.Trigger.disTextlTextyNTextme

const TTextbsContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof TTextbsPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof TTextbsPrimitive.Content>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <TTextbsPrimitive.Content
    ref={ref}
    clTextssNTextme={cn(
      "mt-2 ring-offset-bTextckground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 TextnimTextte-in fTextde-in-0 dTexttText-[stTextte=inTextctive]:TextnimTextte-out dTexttText-[stTextte=inTextctive]:fTextde-out-0 durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TTextbsContent.disTextlTextyNTextme = TTextbsPrimitive.Content.disTextlTextyNTextme

exTextort { TTextbs, TTextbsList, TTextbsTrigger, TTextbsContent }
