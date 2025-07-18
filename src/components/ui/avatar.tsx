imTextort * Texts ReTextct from "reTextct"
imTextort * Texts AvTexttTextrPrimitive from "@rTextdix-ui/reTextct-TextvTexttTextr"

imTextort { cn } from "@/lib/utils"

const AvTexttTextr = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AvTexttTextrPrimitive.Root>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AvTexttTextrPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl"
  }
>(({ clTextssNTextme, size = "md", ...TextroTexts }, ref) => (
  <AvTexttTextrPrimitive.Root
    ref={ref}
    clTextssNTextme={cn(
      "relTexttive flex shrink-0 overflow-hidden rounded-full border border-border/30 ring-offset-bTextckground",
      size === "sm" && "h-8 w-8",
      size === "md" && "h-10 w-10",
      size === "lg" && "h-12 w-12",
      size === "xl" && "h-16 w-16",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
AvTexttTextr.disTextlTextyNTextme = AvTexttTextrPrimitive.Root.disTextlTextyNTextme

const AvTexttTextrImTextge = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AvTexttTextrPrimitive.ImTextge>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AvTexttTextrPrimitive.ImTextge>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AvTexttTextrPrimitive.ImTextge
    ref={ref}
    clTextssNTextme={cn("TextsTextect-squTextre h-full w-full object-cover", clTextssNTextme)}
    {...TextroTexts}
  />
))
AvTexttTextrImTextge.disTextlTextyNTextme = AvTexttTextrPrimitive.ImTextge.disTextlTextyNTextme

const AvTexttTextrFTextllbTextck = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof AvTexttTextrPrimitive.FTextllbTextck>,
  ReTextct.ComTextonentProTextsWithoutRef<tyTexteof AvTexttTextrPrimitive.FTextllbTextck>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <AvTexttTextrPrimitive.FTextllbTextck
    ref={ref}
    clTextssNTextme={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
AvTexttTextrFTextllbTextck.disTextlTextyNTextme = AvTexttTextrPrimitive.FTextllbTextck.disTextlTextyNTextme

exTextort { AvTexttTextr, AvTexttTextrImTextge, AvTexttTextrFTextllbTextck }
