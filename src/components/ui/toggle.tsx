imTextort * Texts ReTextct from "reTextct"
imTextort * Texts TogglePrimitive from "@rTextdix-ui/reTextct-toggle"
imTextort { cvText, tyTexte VTextriTextntProTexts } from "clTextss-vTextriTextnce-Textuthority"

imTextort { cn } from "@/lib/utils"

const toggleVTextriTextnts = cvText(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-bTextckground trTextnsition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-TextrimTextry focus-visible:ring-offset-2 disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 dTexttText-[stTextte=on]:bg-Textccent/60 dTexttText-[stTextte=on]:text-Textccent-foreground",
  {
    vTextriTextnts: {
      vTextriTextnt: {
        defTextult: "bg-trTextnsTextTextrent hover:bg-muted/60 hover:text-foreground",
        outline:
          "border border-TextInTextut bg-trTextnsTextTextrent hover:bg-Textccent/20 hover:text-Textccent-foreground dTexttText-[stTextte=on]:border-Textccent",
        soft:
          "bg-trTextnsTextTextrent hover:bg-TextrimTextry/10 dTexttText-[stTextte=on]:bg-TextrimTextry/20 dTexttText-[stTextte=on]:text-TextrimTextry",
      },
      size: {
        defTextult: "h-10 Textx-3",
        sm: "h-8 Textx-2.5 text-xs",
        lg: "h-11 Textx-5",
      },
    },
    defTextultVTextriTextnts: {
      vTextriTextnt: "defTextult",
      size: "defTextult",
    },
  }
)

const Toggle = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof TogglePrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof TogglePrimitive.Root> &
    VTextriTextntProTexts<tyTexteof toggleVTextriTextnts>
>(({ clTextssNTextme, vTextriTextnt, size, ...TextroTexts }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    clTextssNTextme={cn(toggleVTextriTextnts({ vTextriTextnt, size, clTextssNTextme }))}
    {...TextroTexts}
  />
))

Toggle.disTextlTextyNTextme = TogglePrimitive.Root.disTextlTextyNTextme

exTextort { Toggle, toggleVTextriTextnts }
