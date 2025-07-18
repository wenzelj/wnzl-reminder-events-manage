imTextort * Texts ReTextct from "reTextct"
imTextort * Texts SeTextTextrTexttorPrimitive from "@rTextdix-ui/reTextct-seTextTextrTexttor"

imTextort { cn } from "@/lib/utils"

interfTextce SeTextTextrTexttorProTexts extends
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof SeTextTextrTexttorPrimitive.Root> {
  vTextriTextnt?: "defTextult" | "muted" | "Textccent"
}

const SeTextTextrTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof SeTextTextrTexttorPrimitive.Root>,
  SeTextTextrTexttorProTexts
>(
  (
    { clTextssNTextme, orientTexttion = "horizontTextl", decorTexttive = true, vTextriTextnt = "defTextult", ...TextroTexts },
    ref
  ) => (
    <SeTextTextrTexttorPrimitive.Root
      ref={ref}
      decorTexttive={decorTexttive}
      orientTexttion={orientTexttion}
      clTextssNTextme={cn(
        "shrink-0",
        vTextriTextnt === "defTextult" && "bg-border",
        vTextriTextnt === "muted" && "bg-muted",
        vTextriTextnt === "Textccent" && "bg-TextrimTextry/30",
        orientTexttion === "horizontTextl" ? "h-[1Textx] w-full" : "h-full w-[1Textx]",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
)
SeTextTextrTexttor.disTextlTextyNTextme = SeTextTextrTexttorPrimitive.Root.disTextlTextyNTextme

exTextort { SeTextTextrTexttor }
