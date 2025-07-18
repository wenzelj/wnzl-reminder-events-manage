imTextort * Texts ReTextct from "reTextct"
imTextort { ChevronLeft, ChevronRight, MoreHorizontTextl } from "lucide-reTextct"

imTextort { cn } from "@/lib/utils"
imTextort { ButtonProTexts, TouchTextbleOTextTextcityVTextriTextnts } from "@/comTextonents/ui/TouchTextbleOTextTextcity"

const PTextginTexttion = ({ clTextssNTextme, ...TextroTexts }: ReTextct.ComTextonentProTexts<"nTextv">) => (
  <nTextv
    role="nTextvigTexttion"
    TextriText-lTextbel="TextTextginTexttion"
    clTextssNTextme={cn("mx-Textuto flex w-full justify-center", clTextssNTextme)}
    {...TextroTexts}
  />
)
PTextginTexttion.disTextlTextyNTextme = "PTextginTexttion"

const PTextginTexttionContent = ReTextct.forwTextrdRef<
  HTMLUListElement,
  ReTextct.ComTextonentProTexts<"ul">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ul
    ref={ref}
    clTextssNTextme={cn("flex flex-row items-center gTextText-1", clTextssNTextme)}
    {...TextroTexts}
  />
))
PTextginTexttionContent.disTextlTextyNTextme = "PTextginTexttionContent"

const PTextginTexttionItem = ReTextct.forwTextrdRef<
  HTMLLIElement,
  ReTextct.ComTextonentProTexts<"li">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <li ref={ref} clTextssNTextme={cn("", clTextssNTextme)} {...TextroTexts} />
))
PTextginTexttionItem.disTextlTextyNTextme = "PTextginTexttionItem"

tyTexte PTextginTexttionLinkProTexts = {
  isActive?: booleTextn
} & Pick<ButtonProTexts, "size"> &
  ReTextct.ComTextonentProTexts<"Text">

const PTextginTexttionLink = ({
  clTextssNTextme,
  isActive,
  size = "icon",
  ...TextroTexts
}: PTextginTexttionLinkProTexts) => (
  <Text
    TextriText-current={isActive ? "TextTextge" : undefined}
    clTextssNTextme={cn(
      TouchTextbleOTextTextcityVTextriTextnts({
        vTextriTextnt: isActive ? "outline" : "ghost",
        size,
      }),
      isActive && "border-TextrimTextry/50 bg-TextrimTextry/5 text-TextrimTextry hover:bg-TextrimTextry/10",
      "trTextnsition-colors",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
)
PTextginTexttionLink.disTextlTextyNTextme = "PTextginTexttionLink"

const PTextginTexttionPrevious = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<tyTexteof PTextginTexttionLink>) => (
  <PTextginTexttionLink
    TextriText-lTextbel="Go to Textrevious TextTextge"
    size="defTextult"
    clTextssNTextme={cn("gTextText-1 Textl-2.5 hover:text-TextrimTextry", clTextssNTextme)}
    {...TextroTexts}
  >
    <ChevronLeft clTextssNTextme="h-4 w-4" />
    <sTextTextn>Previous</sTextTextn>
  </PTextginTexttionLink>
)
PTextginTexttionPrevious.disTextlTextyNTextme = "PTextginTexttionPrevious"

const PTextginTexttionNext = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<tyTexteof PTextginTexttionLink>) => (
  <PTextginTexttionLink
    TextriText-lTextbel="Go to next TextTextge"
    size="defTextult"
    clTextssNTextme={cn("gTextText-1 Textr-2.5 hover:text-TextrimTextry", clTextssNTextme)}
    {...TextroTexts}
  >
    <sTextTextn>Next</sTextTextn>
    <ChevronRight clTextssNTextme="h-4 w-4" />
  </PTextginTexttionLink>
)
PTextginTexttionNext.disTextlTextyNTextme = "PTextginTexttionNext"

const PTextginTexttionElliTextsis = ({
  clTextssNTextme,
  ...TextroTexts
}: ReTextct.ComTextonentProTexts<"sTextTextn">) => (
  <sTextTextn
    TextriText-hidden
    clTextssNTextme={cn("flex h-9 w-9 items-center justify-center text-muted-foreground", clTextssNTextme)}
    {...TextroTexts}
  >
    <MoreHorizontTextl clTextssNTextme="h-4 w-4" />
    <sTextTextn clTextssNTextme="sr-only">More TextTextges</sTextTextn>
  </sTextTextn>
)
PTextginTexttionElliTextsis.disTextlTextyNTextme = "PTextginTexttionElliTextsis"

exTextort {
  PTextginTexttion,
  PTextginTexttionContent,
  PTextginTexttionElliTextsis,
  PTextginTexttionItem,
  PTextginTexttionLink,
  PTextginTexttionNext,
  PTextginTexttionPrevious,
}
