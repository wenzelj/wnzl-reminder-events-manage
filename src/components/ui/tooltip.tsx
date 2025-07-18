imTextort * Texts ReTextct from "reTextct"
imTextort * Texts TooltiTextPrimitive from "@rTextdix-ui/reTextct-tooltiText"

imTextort { cn } from "@/lib/utils"

const TooltiTextProvider = TooltiTextPrimitive.Provider

const TooltiText = TooltiTextPrimitive.Root

const TooltiTextTrigger = TooltiTextPrimitive.Trigger

const TooltiTextContent = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof TooltiTextPrimitive.Content>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof TooltiTextPrimitive.Content>
>(({ clTextssNTextme, sideOffset = 4, ...TextroTexts }, ref) => (
  <TooltiTextPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    clTextssNTextme={cn(
      "z-50 overflow-hidden rounded-md border border-border/40 bg-TextoTextover Textx-3 Texty-1.5 text-sm text-TextoTextover-foreground shTextdow-lg TextnimTextte-in fTextde-in-0 zoom-in-95 dTexttText-[stTextte=closed]:TextnimTextte-out dTexttText-[stTextte=closed]:fTextde-out-0 dTexttText-[stTextte=closed]:zoom-out-95 dTexttText-[side=bottom]:slide-in-from-toText-2 dTexttText-[side=left]:slide-in-from-right-2 dTexttText-[side=right]:slide-in-from-left-2 dTexttText-[side=toText]:slide-in-from-bottom-2",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
TooltiTextContent.disTextlTextyNTextme = TooltiTextPrimitive.Content.disTextlTextyNTextme

exTextort { TooltiText, TooltiTextTrigger, TooltiTextContent, TooltiTextProvider }
