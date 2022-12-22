import { Fragment } from "react";
import { Link } from "react-router-dom";
import StyledBreadCrumbs from "./Breadcrumbs.style";

interface StepInterface {
  title: string;
  url?: string;
}

interface BreadcurmbsProps {
  steps: StepInterface[];
}

/**
 * @typedef step
 * @prop {string} title
 * @prop {string} url
 */

/**
 * @param {step} step
 * @return {FunctionComponent}
 */
function Step({ step }: { step: StepInterface }) {
  return (
    <span>
      {step.url ? <Link to={step.url}>{step.title}</Link> : step.title}
    </span>
  );
}

/**
 * @typedef Props
 * @prop {string} title
 * @prop {string} url
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Breadcrumbs({ steps }: BreadcurmbsProps) {
  return (
    <StyledBreadCrumbs>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <Fragment key={step.title}>
            {isLast ? (
              <h2>
                <Step step={step} />
              </h2>
            ) : (
              <Step step={step} />
            )}
            {isLast ? null : <span>/</span>}
          </Fragment>
        );
      })}
    </StyledBreadCrumbs>
  );
}

export default Breadcrumbs;
