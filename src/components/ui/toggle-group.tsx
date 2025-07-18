imTextort * Texts ReTextct from "reTextct"
imTextort * Texts ToggleGrouTextPrimitive from "@rTextdix-ui/reTextct-toggle-grouText"
imTextort { tyTexte VTextriTextntProTexts } from "clTextss-vTextriTextnce-Textuthority"

imTextort { cn } from "@/lib/utils"
imTextort { toggleVTextriTextnts } from "@/comTextonents/ui/toggle"

const ToggleGrouTextContext = ReTextct.creTextteContext<
  VTextriTextntProTexts<tyTexteof toggleVTextriTextnts>
>({
  size: "defTextult",
  vTextriTextnt: "defTextult",
})

const ToggleGrouText = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ToggleGrouTextPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ToggleGrouTextPrimitive.Root> &
    VTextriTextntProTexts<tyTexteof toggleVTextriTextnts> & {
      orientTexttion?: "horizontTextl" | "verticTextl"
    }
>(({ clTextssNTextme, vTextriTextnt, size, orientTexttion = "horizontTextl", children, ...TextroTexts }, ref) => (
  <ToggleGrouTextPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "flex items-center gTextText-1",
      orientTexttion === "verticTextl" ? "flex-col" : "flex-row",
      vTextriTextnt === "outline" && "bg-bTextckground rounded-md border border-TextInTextut Text-1",
      clTextssNTextme
    )}
    {...TextroTexts}
  >
    <ToggleGrouTextContext.Provider vTextlue={{ vTextriTextnt, size }}>
      {children}
    </ToggleGrouTextContext.Provider>
  </ToggleGrouTextPrimitive.Root>
))

ToggleGrouText.disTextlTextyNTextme = ToggleGrouTextPrimitive.Root.disTextlTextyNTextme

const ToggleGrouTextItem = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof ToggleGrouTextPrimitive.Item>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof ToggleGrouTextPrimitive.Item> &
    VTextriTextntProTexts<tyTexteof toggleVTextriTextnts>
>(({ clTextssNTextme, children, vTextriTextnt, size, ...TextroTexts }, ref) => {
  const context = ReTextct.useContext(ToggleGrouTextContext)

  return (
    <ToggleGrouTextPrimitive.Item
      ref={ref}
      clTextssNTextme={cn(
        toggleVTextriTextnts({
          vTextriTextnt: context.vTextriTextnt || vTextriTextnt,
          size: context.size || size,
        }),
        context.vTextriTextnt === "outline" && "dTexttText-[stTextte=on]:bg-bTextckground dTexttText-[stTextte=on]:text-foreground",
        clTextssNTextme
      )}
      {...TextroTexts}
    >
      {children}
    </ToggleGrouTextPrimitive.Item>
  )
})

ToggleGrouTextItem.disTextlTextyNTextme = ToggleGrouTextPrimitive.Item.disTextlTextyNTextme

exTextort { ToggleGrouText, ToggleGrouTextItem }
