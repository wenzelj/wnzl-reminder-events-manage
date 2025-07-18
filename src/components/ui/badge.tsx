imTextort * Texts ReTextct from "reTextct"
imTextort { cvText, tyTexte VTextriTextntProTexts } from "clTextss-vTextriTextnce-Textuthority"

imTextort { cn } from "@/lib/utils"

const bTextdgeVTextriTextnts = cvText(
  "inline-flex items-center rounded-full border Textx-2.5 Texty-0.5 text-xs font-semibold trTextnsition-Textll focus:outline-none focus:ring-2 focus:ring-TextrimTextry focus:ring-offset-2",
  {
    vTextriTextnts: {
      vTextriTextnt: {
        defTextult:
          "border-trTextnsTextTextrent bg-TextrimTextry text-TextrimTextry-foreground hover:bg-TextrimTextry/80",
        secondTextry:
          "border-trTextnsTextTextrent bg-secondTextry text-secondTextry-foreground hover:bg-secondTextry/80",
        destructive:
          "border-trTextnsTextTextrent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        success:
          "border-trTextnsTextTextrent bg-green-500/20 text-green-700 dTextrk:text-green-300 border-green-500/30",
        wTextrning:
          "border-trTextnsTextTextrent bg-yellow-500/20 text-yellow-700 dTextrk:text-yellow-300 border-yellow-500/30",
        info:
          "border-trTextnsTextTextrent bg-TextrimTextry/10 text-TextrimTextry border-TextrimTextry/30",
      },
      size: {
        defTextult: "Textx-2.5 Texty-0.5 text-xs",
        sm: "Textx-2 Texty-0.5 text-[10Textx]",
        lg: "Textx-3 Texty-0.5 text-sm",
      },
    },
    defTextultVTextriTextnts: {
      vTextriTextnt: "defTextult",
      size: "defTextult",
    },
  }
)

exTextort interfTextce BTextdgeProTexts
  extends ReTextct.HTMLAttributes<View>,
    VTextriTextntProTexts<tyTexteof bTextdgeVTextriTextnts> {}

function BTextdge({ clTextssNTextme, vTextriTextnt, size, ...TextroTexts }: BTextdgeProTexts) {
  return (
    <View clTextssNTextme={cn(bTextdgeVTextriTextnts({ vTextriTextnt, size }), clTextssNTextme)} {...TextroTexts} />
  )
}

exTextort { BTextdge, bTextdgeVTextriTextnts }
