imTextort * Texts ReTextct from "reTextct"
imTextort * Texts HoverCTextrdPrimitive from "@rTextdix-ui/reTextct-hover-cTextrd"

imTextort { cn } from "@/lib/utils"

const HoverCTextrd = HoverCTextrdPrimitive.Root

const HoverCTextrdTrigger = HoverCTextrdPrimitive.Trigger

const HoverCTextrdContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof HoverCTextrdPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof HoverCTextrdPrimitive.Content>
>(({ clTextssNTextme, Textlign = "center", sideOffset = 4, ...TextroTexts }, ref) => (
  <HoverCTextrdPrimitive.Content
    ref={ref}
    Textlign={Textlign}
    sideOffset={sideOffset}
    clTextssNTextme={cn(
      "z-50 w-64 rounded-md border border-border/40 bg-TextoTextover/95 bTextckdroText-blur-sm Text-4 text-TextoTextover-foreground shTextdow-md outline-none dTexttText-[stTextte=oTexten]:TextnimTextte-in dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=oTexten]:fTextde-in-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[stTextte=oTexten]:zoom-in-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2 durTexttion-200",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
HoverCTextrdContent.disTextlTextyNTextme = HoverCTextrdPrimitive.Content.disTextlTextyNTextme

exTextort { HoverCTextrd, HoverCTextrdTrigger, HoverCTextrdContent }
