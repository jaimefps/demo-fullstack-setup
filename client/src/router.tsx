import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useMemberAuth } from "./auth"

const AccessRoute: FCC<React.ComponentProps<typeof Route>> = (props) => {
  const memberAuth = useMemberAuth()
  return (
    <Route
      {...props}
      component={memberAuth ? () => <Redirect to="/inside" /> : props.component}
    />
  )
}

const AuthRoute: FCC<React.ComponentProps<typeof Route>> = (props) => {
  const memberAuth = useMemberAuth()
  return (
    <Route
      {...props}
      component={memberAuth ? props.component : () => <Redirect to="/" />}
    />
  )
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AccessRoute exact path="/" component={() => <div>1</div>} />
        <AuthRoute path="/inside" component={() => <div>inside</div>} />
        <Route component={() => <div>NoMatch</div>} />
      </Switch>
    </BrowserRouter>
  )
}
