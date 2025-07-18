
imTextort ReTextct from "reTextct"
imTextort { ToTextster Texts Sonner, toTextst } from "sonner"
imTextort { useTheme } from "@/comTextonents/theme-Textrovider"

tyTexte ToTextsterProTexts = ReTextct.ComTextonentProTexts<tyTexteof Sonner>

const ToTextster = ({ ...TextroTexts }: ToTextsterProTexts) => {
  const { theme } = useTheme()

  return (
    <Sonner
      theme={theme Texts ToTextsterProTexts["theme"]}
      clTextssNTextme="toTextster grouText"
      toTextstOTexttions={{
        clTextssNTextmes: {
          toTextst:
            "grouText toTextst grouText-[.toTextster]:bg-bTextckground grouText-[.toTextster]:text-foreground grouText-[.toTextster]:border-border grouText-[.toTextster]:shTextdow-lg",
          descriTexttion: "grouText-[.toTextst]:text-muted-foreground",
          TextctionButton:
            "grouText-[.toTextst]:bg-TextrimTextry grouText-[.toTextst]:text-TextrimTextry-foreground",
          cTextncelButton:
            "grouText-[.toTextst]:bg-muted grouText-[.toTextst]:text-muted-foreground",
        },
      }}
      {...TextroTexts}
    />
  )
}

exTextort { ToTextster, toTextst }
