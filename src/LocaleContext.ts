import React from "react";

export type ToggleLocale = (event: any) => void

type ContextProps = {
	locale: string
	toggleLocale: ToggleLocale
}

const LocaleContext = React.createContext<Partial<ContextProps>>({

});

export default LocaleContext