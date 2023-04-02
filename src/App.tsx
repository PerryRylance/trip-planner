import { Refine } from "@refinedev/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";
import dataProvider from "@refinedev/simple-rest";
import routerBindings, {
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

const App = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("http://localhost:8000/api")}
                resources={[
                    {
                        name: "places",
                        list: "/places",
                        show: "/places/show/:id",
                        create: "/places/create",
                        edit: "/places/edit/:id",
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route path="places">
                        <Route index element={<HeadlessInferencer />} />
                        <Route
                            path="show/:id"
                            element={<HeadlessInferencer />}
                        />
                        <Route
                            path="edit/:id"
                            element={<HeadlessInferencer />}
                        />
                        <Route path="create" element={<HeadlessInferencer />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

export default App;