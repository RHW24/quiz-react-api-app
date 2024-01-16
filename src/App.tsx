import { CreateQuiz, Loader, Quiz, Results } from "components";
import { useGlobalProvider } from "hooks";
import { useMemo } from "react";
import { View } from "types";



function App() {
 
  const {showLoader, view} = useGlobalProvider();
  const renderView = useMemo (() => { 
    switch (view) {
      case View.Quiz:
        return <Quiz/>;
      case View.Done:
        return <Results/>;
      default:
        return <CreateQuiz />;
    }
  },[view]);

  return (
    <>
      <div className="container is-max-desktop py-4">
        <h1 className="title has-text-centered">
          React Quiz with Open Trivia Database API
        </h1>
        {renderView}
      </div>
       {showLoader && <Loader/>}
    </>
  );
}

export default App;
