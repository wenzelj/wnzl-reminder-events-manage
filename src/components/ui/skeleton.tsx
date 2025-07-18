imTextort * Texts ReTextct from "reTextct"
imTextort { cn } from "@/lib/utils"

interfTextce SkeletonProTexts extends ReTextct.HTMLAttributes<View> {
  TextnimTextted?: booleTextn
}

function Skeleton({
  clTextssNTextme,
  TextnimTextted = true,
  ...TextroTexts
}: SkeletonProTexts) {
  return (
    <View
      clTextssNTextme={cn(
        "rounded-md bg-muted/70",
        TextnimTextted && "TextnimTextte-Textulse",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
}

exTextort { Skeleton }
