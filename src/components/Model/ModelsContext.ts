import React, { ReactNode } from "react";

interface CarModel {
    modelName: string
    overlayNode: ReactNode
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName:string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)