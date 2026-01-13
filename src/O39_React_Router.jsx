// Step 1 - Add dependency npm i react-router
// step 2 - import BrowserRouter in main and implement it.
// step 3 - Implement Routes , Route, Link  

//  BrowserRouter
// - Wraps your app.
// - Enables routing using browser history.
// 🧩 Routes
// - Holds all your <Route> components.
// 🛣️ Route
// - Defines a path and the component to show.
// - Example: /about → <About />
// 🔗 Link
// - Like <a>, but no page reload.
// - Used to navigate between routes.
// 🌟 NavLink
// - Like Link, but adds active styling.
// - Useful for menus or tabs.




import { Route, Routes } from "react-router-dom";
import AllTopics from "./AllTopics";

// Import all topic components
import ImportExport from "./O1_Import_Export.jsx";
import ObjectData from "./O2_ObjectData.jsx";
import ArrayValue from "./O3_ArrayData.jsx";
import State from "./O5_State.jsx";
import Toggle from "./O6_Toggle_or_Hide.jsx";
import MultiCond from "./O7_Multiple_Condition.jsx";
import Props from "./O8_Props.jsx";
import Input from "./O9_Input_field.jsx";
import Component from "./O10_Controlled_Component.jsx";
import CheckBox from "./O11_Handle_CheckBox.jsx";
import Radio from "./O12_Radio_Button.jsx";
import HandleData from "./O13_Loop_and_Map.jsx";
import ReuseComp from "./O14_Reuse_component.jsx";
import Array from "./O15_Array_Nested_loop.jsx";
import Effect from "./O16_Hooks_O1_useEffect.jsx";
import Style from "./O19_Style_css.jsx";
import CssModule from "./O20_Css_Modules.jsx";
import StyledCom from "./O21_Styled_Component.jsx";
import BootStrap from "./O22_Bootstrap.jsx";
import UseRef from "./O23_useRef.jsx";
import UnCtrlComponent from "./O24_Uncontrolled_component.jsx";
import PassFun from "./O25_Pass_Function.jsx";
import ForwordRef from "./O26_ForwardRef.jsx";
import UseFormStatus from "./O27_useFormStatus_hook.jsx";
import Transition from "./O28_UseTransition_hook.jsx";
import Pure from "./O29_Pure_Component_function.jsx";
import Derived from "./O30_Derived_state.jsx";
import LifitingUp from "./O31_Lifting_State_up.jsx";
import Updating from "./O32_Updating_Object_state.jsx";
import UpdateArray from "./O33_Update_Array_state.jsx";
import UseActionState from "./O34_UseActionState_Hook.jsx";
import UseID from "./O35_UseID_hook.jsx";
import CreateContext from "./O37_Context_API.jsx";
import Customhook from "./O38_Custom_Hooks.jsx";
import BrowserRou from "./O40_NavBar.jsx";
import PageNotFound from "./O41_404_pageNotFound.jsx";
import NestedRout from "./O42_Nested_Routing.jsx";
import LayoutIndex from "./O43_Layout_and_Index_Routes.jsx";
import Prefix from "./O44_Prefix_Rout.jsx";
import DynamicRout from "./O45_Dynamic_Route.jsx";
import Optioanl from "./O46_Optional_Segment.jsx";
import ContactForm from "./O47_Email_sending.jsx";
import NavBar from "./O48_NavLink.jsx";
import API from "./O49_API_GET_method.jsx";
import Loader from "./O50_API_Loader.jsx";
import RoutePagesAPI from "./O51_Routes_Pages_API.jsx";
import DeletePagesAPI from "./O52_Delete_API.jsx";
import UpdatePagesAPI from "./O53_PUT_API.jsx";
import Validate from "./O54_Validation.jsx";
import ValidateUser from "./O55_Validation_UseActionState.jsx";
import Reducer from "./O56_UseReducer.jsx";
import LazyLoading from "./O57_Lazy_Loading.jsx";
import UseAPI from "./O58_UseAPI.jsx";
import USEOptimistic from "./O59_UseOptimistic_Hook.jsx";
import CssMod from "./O4_CssModule.jsx";
import ImagePassing from "./O61_Image_Passing.jsx";

function RouterReact(){
    return(
        <Routes>
            {/* Home Page - Book Index */}
            <Route path="/" element={<AllTopics/>}/>
            
            {/* React Basics */}
            <Route path="/O1_Import_Export" element={<ImportExport/>}/>
            <Route path="/O2_ObjectData" element={<ObjectData/>}/>
            <Route path="/O3_ArrayData" element={<ArrayValue/>}/>
            <Route path="/O4_CssModule" element={<CssMod/>}/>
            
            {/* State & Interactivity */}
            <Route path="/O5_State" element={<State/>}/>
            <Route path="/O6_Toggle_or_Hide" element={<Toggle/>}/>
            <Route path="/O7_Multiple_Condition" element={<MultiCond/>}/>
            <Route path="/O8_Props" element={<Props/>}/>
            <Route path="/O9_Input_field" element={<Input/>}/>
            
            {/* Forms & Controlled Components */}
            <Route path="/O10_Controlled_Component" element={<Component/>}/>
            <Route path="/O11_Handle_CheckBox" element={<CheckBox/>}/>
            <Route path="/O12_Radio_Button" element={<Radio/>}/>
            <Route path="/O54_Validation" element={<Validate/>}/>
            <Route path="/O55_Validation_UseActionState" element={<ValidateUser/>}/>
            
            {/* Data Rendering & Mapping */}
            <Route path="/O13_Loop_and_Map" element={<HandleData/>}/>
            <Route path="/O14_Reuse_component" element={<ReuseComp/>}/>
            <Route path="/O15_Array_Nested_loop" element={<Array/>}/>
            
            {/* React Hooks */}
            <Route path="/O16_Hooks_O1_useEffect" element={<Effect/>}/>
            <Route path="/O23_useRef" element={<UseRef/>}/>
            <Route path="/O27_useFormStatus_hook" element={<UseFormStatus/>}/>
            <Route path="/O28_UseTransition_hook" element={<Transition/>}/>
            <Route path="/O34_UseActionState_Hook" element={<UseActionState/>}/>
            <Route path="/O35_UseID_hook" element={<UseID/>}/>
            <Route path="/O56_UseReducer" element={<Reducer/>}/>
            <Route path="/O59_UseOptimistic_Hook" element={<USEOptimistic/>}/>
            
            {/* Styling in React */}
            <Route path="/O19_Style_css" element={<Style/>}/>
            <Route path="/O20_Css_Modules" element={<CssModule/>}/>
            <Route path="/O21_Styled_Component" element={<StyledCom/>}/>
            <Route path="/O22_Bootstrap" element={<BootStrap/>}/>
            
            {/* Advanced Patterns */}
            <Route path="/O24_Uncontrolled_component" element={<UnCtrlComponent/>}/>
            <Route path="/O25_Pass_Function" element={<PassFun/>}/>
            <Route path="/O26_ForwardRef" element={<ForwordRef/>}/>
            <Route path="/O29_Pure_Component_function" element={<Pure/>}/>
            <Route path="/O30_Derived_state" element={<Derived/>}/>
            <Route path="/O31_Lifting_State_up" element={<LifitingUp/>}/>
            <Route path="/O32_Updating_Object_state" element={<Updating/>}/>
            <Route path="/O33_Update_Array_state" element={<UpdateArray/>}/>
            
            {/* Context API & Custom Hooks */}
            <Route path="/O37_Context_API" element={<CreateContext/>}/>
            <Route path="/O38_Custom_Hooks" element={<Customhook/>}/>
            <Route path="/O58_UseAPI" element={<UseAPI/>}/>
            
            {/* React Router */}
            <Route path="/O39_React_Router" element={<RouterReact/>}/>
            <Route path="/O40_NavBar" element={<BrowserRou/>}/>
            <Route path="/O41_404_pageNotFound" element={<PageNotFound/>}/>
            <Route path="/O42_Nested_Routing" element={<NestedRout/>}/>
            <Route path="/O43_Layout_and_Index_Routes" element={<LayoutIndex/>}/>
            <Route path="/O44_Prefix_Rout" element={<Prefix/>}/>
            <Route path="/O45_Dynamic_Route" element={<DynamicRout/>}/>
            <Route path="/O46_Optional_Segment" element={<Optioanl/>}/>
            <Route path="/O48_NavLink" element={<NavBar/>}/>
            
            {/* API Integration */}
            <Route path="/O49_API_GET_method" element={<API/>}/>
            <Route path="/O50_API_Loader" element={<Loader/>}/>
            <Route path="/O51_Routes_Pages_API" element={<RoutePagesAPI/>}/>
            <Route path="/O52_Delete_API" element={<DeletePagesAPI/>}/>
            <Route path="/O53_PUT_API" element={<UpdatePagesAPI/>}/>
            
            {/* Performance & Optimization */}
            <Route path="/O57_Lazy_Loading" element={<LazyLoading/>}/>
            
            {/* Additional Features */}
            <Route path="/O47_Email_sending" element={<ContactForm/>}/>
            <Route path="/O61_Image_Passing" element={<ImagePassing/>}/>
            
            {/* 404 Page */}
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
export default RouterReact;