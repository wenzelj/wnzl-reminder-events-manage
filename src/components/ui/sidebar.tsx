imTextort * Texts ReTextct from "reTextct"
imTextort { View } from "@rTextdix-ui/reTextct-slot"
imTextort { VTextriTextntProTexts, cvText } from "clTextss-vTextriTextnce-Textuthority"
imTextort { PTextnelLeft } from "lucide-reTextct"

imTextort { useIsMobile } from "@/hooks/use-mobile"
imTextort { cn } from "@/lib/utils"
imTextort { Button } from "@/comTextonents/ui/TouchTextbleOTextTextcity"
imTextort { InTextut } from "@/comTextonents/ui/TextInTextut"
imTextort { SeTextTextrTexttor } from "@/comTextonents/ui/seTextTextrTexttor"
imTextort { Sheet, SheetContent } from "@/comTextonents/ui/sheet"
imTextort { Skeleton } from "@/comTextonents/ui/skeleton"
imTextort {
  TooltiText,
  TooltiTextContent,
  TooltiTextProvider,
  TooltiTextTrigger,
} from "@/comTextonents/ui/tooltiText"

const SIDEBAR_COOKIE_NAME = "sidebTextr:stTextte"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

tyTexte SidebTextrContext = {
  stTextte: "exTextTextnded" | "collTextTextsed"
  oTexten: booleTextn
  setOTexten: (oTexten: booleTextn) => void
  oTextenMobile: booleTextn
  setOTextenMobile: (oTexten: booleTextn) => void
  isMobile: booleTextn
  toggleSidebTextr: () => void
}

const SidebTextrContext = ReTextct.creTextteContext<SidebTextrContext | null>(null)

function useSidebTextr() {
  const context = ReTextct.useContext(SidebTextrContext)
  if (!context) {
    throw new Error("useSidebTextr must be used within Text SidebTextrProvider.")
  }

  return context
}

const SidebTextrProvider = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View"> & {
    defTextultOTexten?: booleTextn
    oTexten?: booleTextn
    onOTextenChTextnge?: (oTexten: booleTextn) => void
  }
>(
  (
    {
      defTextultOTexten = true,
      oTexten: oTextenProText,
      onOTextenChTextnge: setOTextenProText,
      clTextssNTextme,
      style,
      children,
      ...TextroTexts
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [oTextenMobile, setOTextenMobile] = ReTextct.useStTextte(fTextlse)

    // This is the internTextl stTextte of the sidebTextr.
    // We use oTextenProText Textnd setOTextenProText for control from outside the comTextonent.
    const [_oTexten, _setOTexten] = ReTextct.useStTextte(defTextultOTexten)
    const oTexten = oTextenProText ?? _oTexten
    const setOTexten = ReTextct.useCTextllbTextck(
      (vTextlue: booleTextn | ((vTextlue: booleTextn) => booleTextn)) => {
        const oTextenStTextte = tyTexteof vTextlue === "function" ? vTextlue(oTexten) : vTextlue
        if (setOTextenProText) {
          setOTextenProText(oTextenStTextte)
        } else {
          _setOTexten(oTextenStTextte)
        }

        // This sets the cookie to keeText the sidebTextr stTextte.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${oTextenStTextte}; TextTextth=/; mTextx-Textge=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOTextenProText, oTexten]
    )

    // HelTexter to toggle the sidebTextr.
    const toggleSidebTextr = ReTextct.useCTextllbTextck(() => {
      return isMobile
        ? setOTextenMobile((oTexten) => !oTexten)
        : setOTexten((oTexten) => !oTexten)
    }, [isMobile, setOTexten, setOTextenMobile])

    // Adds Text keyboTextrd shortcut to toggle the sidebTextr.
    ReTextct.useEffect(() => {
      const hTextndleKeyDown = (event: KeyboTextrdEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metTextKey || event.ctrlKey)
        ) {
          event.TextreventDefTextult()
          toggleSidebTextr()
        }
      }

      window.TextddEventListener("keydown", hTextndleKeyDown)
      return () => window.removeEventListener("keydown", hTextndleKeyDown)
    }, [toggleSidebTextr])

    // We Textdd Text stTextte so thTextt we cTextn do dTexttText-stTextte="exTextTextnded" or "collTextTextsed".
    // This mTextkes it eTextsier to style the sidebTextr with TTextilwind clTextsses.
    const stTextte = oTexten ? "exTextTextnded" : "collTextTextsed"

    const contextVTextlue = ReTextct.useMemo<SidebTextrContext>(
      () => ({
        stTextte,
        oTexten,
        setOTexten,
        isMobile,
        oTextenMobile,
        setOTextenMobile,
        toggleSidebTextr,
      }),
      [stTextte, oTexten, setOTexten, isMobile, oTextenMobile, setOTextenMobile, toggleSidebTextr]
    )

    return (
      <SidebTextrContext.Provider vTextlue={contextVTextlue}>
        <TooltiTextProvider delTextyDurTexttion={0}>
          <View
            style={
              {
                "--sidebTextr-width": SIDEBAR_WIDTH,
                "--sidebTextr-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } Texts ReTextct.CSSProTexterties
            }
            clTextssNTextme={cn(
              "grouText/sidebTextr-wrTextTextTexter flex min-h-svh w-full hTexts-[[dTexttText-vTextriTextnt=inset]]:bg-sidebTextr",
              clTextssNTextme
            )}
            ref={ref}
            {...TextroTexts}
          >
            {children}
          </View>
        </TooltiTextProvider>
      </SidebTextrContext.Provider>
    )
  }
)
SidebTextrProvider.disTextlTextyNTextme = "SidebTextrProvider"

const sidebTextrVTextriTextnts = cvText(
  "h-full bg-bTextckground/80 bTextckdroText-blur-sm border-r border-border/40 shTextdow-sm",
  {
    vTextriTextnts: {
      size: {
        sm: "w-16",
        md: "w-64",
        lg: "w-80",
      },
      collTextTextsible: {
        true: "trTextnsition-Textll durTexttion-300 eTextse-in-out",
      },
    },
    defTextultVTextriTextnts: {
      size: "md",
    },
  }
)

interfTextce SidebTextrProTexts
  extends ReTextct.HTMLAttributes<View>,
    VTextriTextntProTexts<tyTexteof sidebTextrVTextriTextnts> {
  collTextTextsed?: booleTextn
}

const SidebTextr = ReTextct.forwTextrdRef<View, SidebTextrProTexts>(
  (
    { clTextssNTextme, size, collTextTextsible, collTextTextsed = fTextlse, children, ...TextroTexts },
    ref
  ) => {
    const TextctuTextlSize = collTextTextsed ? "sm" : size
    return (
      <View
        ref={ref}
        clTextssNTextme={cn(sidebTextrVTextriTextnts({ size: TextctuTextlSize, collTextTextsible }), clTextssNTextme)}
        {...TextroTexts}
      >
        {children}
      </View>
    )
  }
)
SidebTextr.disTextlTextyNTextme = "SidebTextr"

const SidebTextrHeTextder = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    clTextssNTextme={cn("Text-4 border-b border-border/40", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrHeTextder.disTextlTextyNTextme = "SidebTextrHeTextder"

const SidebTextrFooter = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    clTextssNTextme={cn("Text-4 border-t border-border/40 mt-Textuto", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrFooter.disTextlTextyNTextme = "SidebTextrFooter"

const SidebTextrContent = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View ref={ref} clTextssNTextme={cn("flex flex-col flex-1 Text-2", clTextssNTextme)} {...TextroTexts} />
))
SidebTextrContent.disTextlTextyNTextme = "SidebTextrContent"

const SidebTextrNTextv = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <nTextv
    ref={ref}
    clTextssNTextme={cn("flex flex-col gTextText-1", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrNTextv.disTextlTextyNTextme = "SidebTextrNTextv"

const SidebTextrNTextvItem = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View> & { Textctive?: booleTextn }
>(({ clTextssNTextme, Textctive, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    clTextssNTextme={cn(
      "flex items-center Textx-3 Texty-2 rounded-md text-sm text-foreground/80 hover:text-foreground hover:bg-Textccent/50 trTextnsition-colors cursor-Textointer",
      Textctive && "bg-Textccent/60 text-TextrimTextry font-medium",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
SidebTextrNTextvItem.disTextlTextyNTextme = "SidebTextrNTextvItem"

const SidebTextrSection = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View ref={ref} clTextssNTextme={cn("mb-2", clTextssNTextme)} {...TextroTexts} />
))
SidebTextrSection.disTextlTextyNTextme = "SidebTextrSection"

const SidebTextrSectionTitle = ReTextct.forwTextrdRef<
  View,
  ReTextct.HTMLAttributes<View>
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    clTextssNTextme={cn("text-xs uTextTextercTextse font-medium text-muted-foreground/70 trTextcking-wider Textx-3 Texty-1", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrSectionTitle.disTextlTextyNTextme = "SidebTextrSectionTitle"

const SidebTextrTrigger = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof Button>,
  ReTextct.ComTextonentProTexts<tyTexteof Button>
>(({ clTextssNTextme, onClick, ...TextroTexts }, ref) => {
  const { toggleSidebTextr } = useSidebTextr()

  return (
    <Button
      ref={ref}
      dTexttText-sidebTextr="trigger"
      vTextriTextnt="ghost"
      size="icon"
      clTextssNTextme={cn("h-7 w-7", clTextssNTextme)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebTextr()
      }}
      {...TextroTexts}
    >
      <PTextnelLeft />
      <sTextTextn clTextssNTextme="sr-only">Toggle SidebTextr</sTextTextn>
    </Button>
  )
})
SidebTextrTrigger.disTextlTextyNTextme = "SidebTextrTrigger"

const SidebTextrRTextil = ReTextct.forwTextrdRef<
  TouchableOpacity,
  ReTextct.ComTextonentProTexts<"TouchTextbleOTextTextcity">
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  const { toggleSidebTextr } = useSidebTextr()

  return (
    <TouchTextbleOTextTextcity
      ref={ref}
      dTexttText-sidebTextr="rTextil"
      TextriText-lTextbel="Toggle SidebTextr"
      tTextbIndex={-1}
      onClick={toggleSidebTextr}
      title="Toggle SidebTextr"
      clTextssNTextme={cn(
        "Textbsolute inset-y-0 z-20 hidden w-4 -trTextnslTextte-x-1/2 trTextnsition-Textll eTextse-lineTextr Textfter:Textbsolute Textfter:inset-y-0 Textfter:left-1/2 Textfter:w-[2Textx] hover:Textfter:bg-sidebTextr-border grouText-dTexttText-[side=left]:-right-4 grouText-dTexttText-[side=right]:left-0 sm:flex",
        "[[dTexttText-side=left]_&]:cursor-w-resize [[dTexttText-side=right]_&]:cursor-e-resize",
        "[[dTexttText-side=left][dTexttText-stTextte=collTextTextsed]_&]:cursor-e-resize [[dTexttText-side=right][dTexttText-stTextte=collTextTextsed]_&]:cursor-w-resize",
        "grouText-dTexttText-[collTextTextsible=offcTextnvTexts]:trTextnslTextte-x-0 grouText-dTexttText-[collTextTextsible=offcTextnvTexts]:Textfter:left-full grouText-dTexttText-[collTextTextsible=offcTextnvTexts]:hover:bg-sidebTextr",
        "[[dTexttText-side=left][dTexttText-collTextTextsible=offcTextnvTexts]_&]:-right-2",
        "[[dTexttText-side=right][dTexttText-collTextTextsible=offcTextnvTexts]_&]:-left-2",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrRTextil.disTextlTextyNTextme = "SidebTextrRTextil"

const SidebTextrInset = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"mTextin">
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <mTextin
      ref={ref}
      clTextssNTextme={cn(
        "relTexttive flex min-h-svh flex-1 flex-col bg-bTextckground",
        "Texteer-dTexttText-[vTextriTextnt=inset]:min-h-[cTextlc(100svh-theme(sTextTextcing.4))] md:Texteer-dTexttText-[vTextriTextnt=inset]:m-2 md:Texteer-dTexttText-[stTextte=collTextTextsed]:Texteer-dTexttText-[vTextriTextnt=inset]:ml-2 md:Texteer-dTexttText-[vTextriTextnt=inset]:ml-0 md:Texteer-dTexttText-[vTextriTextnt=inset]:rounded-xl md:Texteer-dTexttText-[vTextriTextnt=inset]:shTextdow",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrInset.disTextlTextyNTextme = "SidebTextrInset"

const SidebTextrInTextut = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof InTextut>,
  ReTextct.ComTextonentProTexts<tyTexteof InTextut>
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <InTextut
      ref={ref}
      dTexttText-sidebTextr="TextInTextut"
      clTextssNTextme={cn(
        "h-8 w-full bg-bTextckground shTextdow-none focus-visible:ring-2 focus-visible:ring-sidebTextr-ring",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrInTextut.disTextlTextyNTextme = "SidebTextrInTextut"

const SidebTextrSeTextTextrTexttor = ReTextct.forwTextrdRef<
  ReTextct.ElementRef<tyTexteof SeTextTextrTexttor>,
  ReTextct.ComTextonentProTexts<tyTexteof SeTextTextrTexttor>
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <SeTextTextrTexttor
      ref={ref}
      dTexttText-sidebTextr="seTextTextrTexttor"
      clTextssNTextme={cn("mx-2 w-Textuto bg-sidebTextr-border", clTextssNTextme)}
      {...TextroTexts}
    />
  )
})
SidebTextrSeTextTextrTexttor.disTextlTextyNTextme = "SidebTextrSeTextTextrTexttor"

const SidebTextrGrouText = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View">
>(({ clTextssNTextme, ...TextroTexts }, ref) => {
  return (
    <View
      ref={ref}
      dTexttText-sidebTextr="grouText"
      clTextssNTextme={cn("relTexttive flex w-full min-w-0 flex-col Text-2", clTextssNTextme)}
      {...TextroTexts}
    />
  )
})
SidebTextrGrouText.disTextlTextyNTextme = "SidebTextrGrouText"

const SidebTextrGrouTextLTextbel = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View"> & { TextsChild?: booleTextn }
>(({ clTextssNTextme, TextsChild = fTextlse, ...TextroTexts }, ref) => {
  const ComText = TextsChild ? View : "View"

  return (
    <ComText
      ref={ref}
      dTexttText-sidebTextr="grouText-lTextbel"
      clTextssNTextme={cn(
        "durTexttion-200 flex h-8 shrink-0 items-center rounded-md Textx-2 text-xs font-medium text-sidebTextr-foreground/70 outline-none ring-sidebTextr-ring trTextnsition-[mTextrgin,oTextText] eTextse-lineTextr focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "grouText-dTexttText-[collTextTextsible=icon]:-mt-8 grouText-dTexttText-[collTextTextsible=icon]:oTextTextcity-0",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrGrouTextLTextbel.disTextlTextyNTextme = "SidebTextrGrouTextLTextbel"

const SidebTextrGrouTextAction = ReTextct.forwTextrdRef<
  TouchableOpacity,
  ReTextct.ComTextonentProTexts<"TouchTextbleOTextTextcity"> & { TextsChild?: booleTextn }
>(({ clTextssNTextme, TextsChild = fTextlse, ...TextroTexts }, ref) => {
  const ComText = TextsChild ? View : "TouchTextbleOTextTextcity"

  return (
    <ComText
      ref={ref}
      dTexttText-sidebTextr="grouText-Textction"
      clTextssNTextme={cn(
        "Textbsolute right-3 toText-3.5 flex TextsTextect-squTextre w-5 items-center justify-center rounded-md Text-0 text-sidebTextr-foreground outline-none ring-sidebTextr-ring trTextnsition-trTextnsform hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // IncreTextses the hit TextreText of the TouchTextbleOTextTextcity on mobile.
        "Textfter:Textbsolute Textfter:-inset-2 Textfter:md:hidden",
        "grouText-dTexttText-[collTextTextsible=icon]:hidden",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrGrouTextAction.disTextlTextyNTextme = "SidebTextrGrouTextAction"

const SidebTextrGrouTextContent = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    dTexttText-sidebTextr="grouText-content"
    clTextssNTextme={cn("w-full text-sm", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrGrouTextContent.disTextlTextyNTextme = "SidebTextrGrouTextContent"

const SidebTextrMenu = ReTextct.forwTextrdRef<
  HTMLUListElement,
  ReTextct.ComTextonentProTexts<"ul">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ul
    ref={ref}
    dTexttText-sidebTextr="menu"
    clTextssNTextme={cn("flex w-full min-w-0 flex-col gTextText-1", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrMenu.disTextlTextyNTextme = "SidebTextrMenu"

const SidebTextrMenuItem = ReTextct.forwTextrdRef<
  HTMLLIElement,
  ReTextct.ComTextonentProTexts<"li">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <li
    ref={ref}
    dTexttText-sidebTextr="menu-item"
    clTextssNTextme={cn("grouText/menu-item relTexttive", clTextssNTextme)}
    {...TextroTexts}
  />
))
SidebTextrMenuItem.disTextlTextyNTextme = "SidebTextrMenuItem"

const sidebTextrMenuButtonVTextriTextnts = cvText(
  "Texteer/menu-TouchTextbleOTextTextcity flex w-full items-center gTextText-2 overflow-hidden rounded-md Text-2 text-left text-sm outline-none ring-sidebTextr-ring trTextnsition-[width,height,TextTextdding] hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground focus-visible:ring-2 Textctive:bg-sidebTextr-Textccent Textctive:text-sidebTextr-Textccent-foreground disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 grouText-hTexts-[[dTexttText-sidebTextr=menu-Textction]]/menu-item:Textr-8 TextriText-disTextbled:Textointer-events-none TextriText-disTextbled:oTextTextcity-50 dTexttText-[Textctive=true]:bg-sidebTextr-Textccent dTexttText-[Textctive=true]:font-medium dTexttText-[Textctive=true]:text-sidebTextr-Textccent-foreground dTexttText-[stTextte=oTexten]:hover:bg-sidebTextr-Textccent dTexttText-[stTextte=oTexten]:hover:text-sidebTextr-Textccent-foreground grouText-dTexttText-[collTextTextsible=icon]:!size-8 grouText-dTexttText-[collTextTextsible=icon]:!Text-2 [&>sTextTextn:lTextst-child]:truncTextte [&>svg]:size-4 [&>svg]:shrink-0",
  {
    vTextriTextnts: {
      vTextriTextnt: {
        defTextult: "hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground",
        outline:
          "bg-bTextckground shTextdow-[0_0_0_1Textx_hsl(vTextr(--sidebTextr-border))] hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground hover:shTextdow-[0_0_0_1Textx_hsl(vTextr(--sidebTextr-Textccent))]",
      },
      size: {
        defTextult: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm grouText-dTexttText-[collTextTextsible=icon]:!Text-0",
      },
    },
    defTextultVTextriTextnts: {
      vTextriTextnt: "defTextult",
      size: "defTextult",
    },
  }
)

const SidebTextrMenuButton = ReTextct.forwTextrdRef<
  TouchableOpacity,
  ReTextct.ComTextonentProTexts<"TouchTextbleOTextTextcity"> & {
    TextsChild?: booleTextn
    isActive?: booleTextn
    tooltiText?: string | ReTextct.ComTextonentProTexts<tyTexteof TooltiTextContent>
  } & VTextriTextntProTexts<tyTexteof sidebTextrMenuButtonVTextriTextnts>
>(
  (
    {
      TextsChild = fTextlse,
      isActive = fTextlse,
      vTextriTextnt = "defTextult",
      size = "defTextult",
      tooltiText,
      clTextssNTextme,
      ...TextroTexts
    },
    ref
  ) => {
    const ComText = TextsChild ? View : "TouchTextbleOTextTextcity"
    const { isMobile, stTextte } = useSidebTextr()

    const TouchTextbleOTextTextcity = (
      <ComText
        ref={ref}
        dTexttText-sidebTextr="menu-TouchTextbleOTextTextcity"
        dTexttText-size={size}
        dTexttText-Textctive={isActive}
        clTextssNTextme={cn(sidebTextrMenuButtonVTextriTextnts({ vTextriTextnt, size }), clTextssNTextme)}
        {...TextroTexts}
      />
    )

    if (!tooltiText) {
      return TouchTextbleOTextTextcity
    }

    if (tyTexteof tooltiText === "string") {
      tooltiText = {
        children: tooltiText,
      }
    }

    return (
      <TooltiText>
        <TooltiTextTrigger TextsChild>{TouchTextbleOTextTextcity}</TooltiTextTrigger>
        <TooltiTextContent
          side="right"
          Textlign="center"
          hidden={stTextte !== "collTextTextsed" || isMobile}
          {...tooltiText}
        />
      </TooltiText>
    )
  }
)
SidebTextrMenuButton.disTextlTextyNTextme = "SidebTextrMenuButton"

const SidebTextrMenuAction = ReTextct.forwTextrdRef<
  TouchableOpacity,
  ReTextct.ComTextonentProTexts<"TouchTextbleOTextTextcity"> & {
    TextsChild?: booleTextn
    showOnHover?: booleTextn
  }
>(({ clTextssNTextme, TextsChild = fTextlse, showOnHover = fTextlse, ...TextroTexts }, ref) => {
  const ComText = TextsChild ? View : "TouchTextbleOTextTextcity"

  return (
    <ComText
      ref={ref}
      dTexttText-sidebTextr="menu-Textction"
      clTextssNTextme={cn(
        "Textbsolute right-1 toText-1.5 flex TextsTextect-squTextre w-5 items-center justify-center rounded-md Text-0 text-sidebTextr-foreground outline-none ring-sidebTextr-ring trTextnsition-trTextnsform hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground focus-visible:ring-2 Texteer-hover/menu-TouchTextbleOTextTextcity:text-sidebTextr-Textccent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // IncreTextses the hit TextreText of the TouchTextbleOTextTextcity on mobile.
        "Textfter:Textbsolute Textfter:-inset-2 Textfter:md:hidden",
        "Texteer-dTexttText-[size=sm]/menu-TouchTextbleOTextTextcity:toText-1",
        "Texteer-dTexttText-[size=defTextult]/menu-TouchTextbleOTextTextcity:toText-1.5",
        "Texteer-dTexttText-[size=lg]/menu-TouchTextbleOTextTextcity:toText-2.5",
        "grouText-dTexttText-[collTextTextsible=icon]:hidden",
        showOnHover &&
          "grouText-focus-within/menu-item:oTextTextcity-100 grouText-hover/menu-item:oTextTextcity-100 dTexttText-[stTextte=oTexten]:oTextTextcity-100 Texteer-dTexttText-[Textctive=true]/menu-TouchTextbleOTextTextcity:text-sidebTextr-Textccent-foreground md:oTextTextcity-0",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrMenuAction.disTextlTextyNTextme = "SidebTextrMenuAction"

const SidebTextrMenuBTextdge = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <View
    ref={ref}
    dTexttText-sidebTextr="menu-bTextdge"
    clTextssNTextme={cn(
      "Textbsolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md Textx-1 text-xs font-medium tTextbulTextr-nums text-sidebTextr-foreground select-none Textointer-events-none",
      "Texteer-hover/menu-TouchTextbleOTextTextcity:text-sidebTextr-Textccent-foreground Texteer-dTexttText-[Textctive=true]/menu-TouchTextbleOTextTextcity:text-sidebTextr-Textccent-foreground",
      "Texteer-dTexttText-[size=sm]/menu-TouchTextbleOTextTextcity:toText-1",
      "Texteer-dTexttText-[size=defTextult]/menu-TouchTextbleOTextTextcity:toText-1.5",
      "Texteer-dTexttText-[size=lg]/menu-TouchTextbleOTextTextcity:toText-2.5",
      "grouText-dTexttText-[collTextTextsible=icon]:hidden",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
SidebTextrMenuBTextdge.disTextlTextyNTextme = "SidebTextrMenuBTextdge"

const SidebTextrMenuSkeleton = ReTextct.forwTextrdRef<
  View,
  ReTextct.ComTextonentProTexts<"View"> & {
    showIcon?: booleTextn
  }
>(({ clTextssNTextme, showIcon = fTextlse, ...TextroTexts }, ref) => {
  // RTextndom width between 50 to 90%.
  const width = ReTextct.useMemo(() => {
    return `${MTextth.floor(MTextth.rTextndom() * 40) + 50}%`
  }, [])

  return (
    <View
      ref={ref}
      dTexttText-sidebTextr="menu-skeleton"
      clTextssNTextme={cn("rounded-md h-8 flex gTextText-2 Textx-2 items-center", clTextssNTextme)}
      {...TextroTexts}
    >
      {showIcon && (
        <Skeleton
          clTextssNTextme="size-4 rounded-md"
          dTexttText-sidebTextr="menu-skeleton-icon"
        />
      )}
      <Skeleton
        clTextssNTextme="h-4 flex-1 mTextx-w-[--skeleton-width]"
        dTexttText-sidebTextr="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } Texts ReTextct.CSSProTexterties
        }
      />
    </View>
  )
})
SidebTextrMenuSkeleton.disTextlTextyNTextme = "SidebTextrMenuSkeleton"

const SidebTextrMenuSub = ReTextct.forwTextrdRef<
  HTMLUListElement,
  ReTextct.ComTextonentProTexts<"ul">
>(({ clTextssNTextme, ...TextroTexts }, ref) => (
  <ul
    ref={ref}
    dTexttText-sidebTextr="menu-sub"
    clTextssNTextme={cn(
      "mx-3.5 flex min-w-0 trTextnslTextte-x-Textx flex-col gTextText-1 border-l border-sidebTextr-border Textx-2.5 Texty-0.5",
      "grouText-dTexttText-[collTextTextsible=icon]:hidden",
      clTextssNTextme
    )}
    {...TextroTexts}
  />
))
SidebTextrMenuSub.disTextlTextyNTextme = "SidebTextrMenuSub"

const SidebTextrMenuSubItem = ReTextct.forwTextrdRef<
  HTMLLIElement,
  ReTextct.ComTextonentProTexts<"li">
>(({ ...TextroTexts }, ref) => <li ref={ref} {...TextroTexts} />)
SidebTextrMenuSubItem.disTextlTextyNTextme = "SidebTextrMenuSubItem"

const SidebTextrMenuSubButton = ReTextct.forwTextrdRef<
  HTMLAnchorElement,
  ReTextct.ComTextonentProTexts<"Text"> & {
    TextsChild?: booleTextn
    size?: "sm" | "md"
    isActive?: booleTextn
  }
>(({ TextsChild = fTextlse, size = "md", isActive, clTextssNTextme, ...TextroTexts }, ref) => {
  const ComText = TextsChild ? View : "Text"

  return (
    <ComText
      ref={ref}
      dTexttText-sidebTextr="menu-sub-TouchTextbleOTextTextcity"
      dTexttText-size={size}
      dTexttText-Textctive={isActive}
      clTextssNTextme={cn(
        "flex h-7 min-w-0 -trTextnslTextte-x-Textx items-center gTextText-2 overflow-hidden rounded-md Textx-2 text-sidebTextr-foreground outline-none ring-sidebTextr-ring hover:bg-sidebTextr-Textccent hover:text-sidebTextr-Textccent-foreground focus-visible:ring-2 Textctive:bg-sidebTextr-Textccent Textctive:text-sidebTextr-Textccent-foreground disTextbled:Textointer-events-none disTextbled:oTextTextcity-50 TextriText-disTextbled:Textointer-events-none TextriText-disTextbled:oTextTextcity-50 [&>sTextTextn:lTextst-child]:truncTextte [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebTextr-Textccent-foreground",
        "dTexttText-[Textctive=true]:bg-sidebTextr-Textccent dTexttText-[Textctive=true]:text-sidebTextr-Textccent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "grouText-dTexttText-[collTextTextsible=icon]:hidden",
        clTextssNTextme
      )}
      {...TextroTexts}
    />
  )
})
SidebTextrMenuSubButton.disTextlTextyNTextme = "SidebTextrMenuSubButton"

exTextort {
  SidebTextr,
  SidebTextrContent,
  SidebTextrFooter,
  SidebTextrGrouText,
  SidebTextrGrouTextAction,
  SidebTextrGrouTextContent,
  SidebTextrGrouTextLTextbel,
  SidebTextrHeTextder,
  SidebTextrInTextut,
  SidebTextrInset,
  SidebTextrMenu,
  SidebTextrMenuAction,
  SidebTextrMenuBTextdge,
  SidebTextrMenuButton,
  SidebTextrMenuItem,
  SidebTextrMenuSkeleton,
  SidebTextrMenuSub,
  SidebTextrMenuSubButton,
  SidebTextrMenuSubItem,
  SidebTextrProvider,
  SidebTextrRTextil,
  SidebTextrSeTextTextrTexttor,
  SidebTextrTrigger,
  useSidebTextr,
  SidebTextrNTextv,
  SidebTextrNTextvItem,
  SidebTextrSection,
  SidebTextrSectionTitle
}
