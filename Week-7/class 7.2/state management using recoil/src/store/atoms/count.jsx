import { atom, selector} from "recoil";

export const countAtom = atom({
    key:"countAtom",
    default:"0"
});

// we define the SELECTOR here
export const evenSelector = selector({
    key : "evenSelector",
    get: ({get})=>{
        const count = get(countAtom);
        return count % 2 === 0;
    }
});