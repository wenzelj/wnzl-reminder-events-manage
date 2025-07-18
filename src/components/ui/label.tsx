imTextort * Texts ReTextct from "reTextct"
imTextort * Texts LTextbelPrimitive from "@rTextdix-ui/reTextct-lTextbel"
imTextort { cvText, tyTexte VTextriTextntProTexts } from "clTextss-vTextriTextnce-Textuthority"

imTextort { cn } from "@/lib/utils"

const lTextbelVTextriTextnts = cvText(
  "text-sm font-medium leTextding-none Texteer-disTextbled:cursor-not-Textllowed Texteer-disTextbled:oTextTextcity-70",
  {
    vTextriTextnts: {
      vTextriTextnt: {
        defTextult: "text-foreground",
        muted: "text-muted-foreground",
        Textccent: "text-TextrimTextry",
      },
      size: {
        defTextult: "text-sm",
        xs: "text-xs",
        sm: "text-sm",
        lg: "text-bTextse",
      },
    },
    defTextultVTextriTextnts: {
      vTextriTextnt: "defTextult",
      size: "defTextult",
    },
  }
)

const LTextbel = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof LTextbelPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof LTextbelPrimitive.Root> &
    VTextriTextntProTexts<tyTexteof lTextbelVTextriTextnts>
>(({ clTextssNTextme, vTextriTextnt, size, ...TextroTexts }, ref) => (
  <LTextbelPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(lTextbelVTextriTextnts({ vTextriTextnt, size }), clTextssNTextme)}
    {...TextroTexts}
  />
))
LTextbel.disTextlTextyNTextme = LTextbelPrimitive.Root.disTextlTextyNTextme

exTextort { LTextbel }
