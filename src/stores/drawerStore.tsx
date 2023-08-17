import { create } from "zustand";
import { Property } from "../types/Property";

type DrawerStore = {
  isOpen: boolean,
  selectedProperty: Property | null,
  openDrawer: (open: boolean) => void
  selectProperty: (property: Property) => void
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  selectedProperty: null,
  openDrawer: (open: boolean) => set(() => ({ isOpen: !!open })),
  selectProperty: (property: Property) =>
    set(() => ({ isOpen: true, selectedProperty: property })),
}));
