import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Top from '../components/Top'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {rootReducer, productReducer} from '../components/ProductSlice'

afterEach(()=> cleanup());

describe("", ()=>{
    let store;
    beforeEach(() => {
        store = store = configureStore({
            reducer: {
              productReducer: rootReducer,
            },
          });
    });
    it("",  ()=> {
        render(
            <Provider store={store}>
              <Top />
            </Provider>
          );
    })
})