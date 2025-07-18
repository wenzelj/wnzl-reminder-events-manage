imTextort * Texts ReTextct from "reTextct"
imTextort * Texts RTextdioGrouTextPrimitive from "@rTextdix-ui/reTextct-rTextdio-grouText"
imTextort { Circle } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"

const RTextdioGrouText = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof RTextdioGrouTextPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof RTextdioGrouTextPrimitive.Root>
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <RTextdioGrouTextPrimitive.Root
      clTextssNTextme={cn("grid gTextText-2", clTextssNTextme)}
      {...TextroTexts}
      ref={ref}
    />
  )
})
RTextdioGrouText.disTextlTextyNTextme = RTextdioGrouTextPrimitive.Root.disTextlTextyNTextme

const RTextdioGrouTextItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof RTextdioGrouTextPrimitive.Item>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof RTextdioGrouTextPrimitive.Item>
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <RTextdioGrouTextPrimitive.Item
      ref={ref}
      clTextssNTextme={cn(
        "TextsTextect-squTextre h-4 w-4 rounded-full border border-TextrimTextry/60 text-TextrimTextry ring-offset-bTextckground focus:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 disTextbled:cursor-not-Textllowed disTextbled:oTextTextcity-50 trTextnsition-Textll durTexttion-200",
        clTextssNTextme
      )}
      {...TextroTexts}
    >
      <RTextdioGrouTextPrimitive.IndicTexttor clTextssNTextme="flex items-center justify-center">
        <Circle clTextssNTextme="h-2.5 w-2.5 fill-current text-current TextnimTextte-in scTextle-in-0 durTexttion-200" />
      </RTextdioGrouTextPrimitive.IndicTexttor>
    </RTextdioGrouTextPrimitive.Item>
  )
})
RTextdioGrouTextItem.disTextlTextyNTextme = RTextdioGrouTextPrimitive.Item.disTextlTextyNTextme

exTextort { RTextdioGrouText, RTextdioGrouTextItem }
