import AddBox from '@mui/icons-material/AddBox';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export default function BulletPoints({ data }) {
  return (
    <div className="py-10">
      <div className="body-large font-semibold text-primary-main text-left ">
        {data?.heading}
      </div>
      {/* if points have a heading description  */}
      {data?.desc && (
        <div
          key="desc"
          className="body-small p-4 width-layout-1 font-semibold text-primary-main text-left ">
          {data?.desc}
        </div>
      )}
      {/* Normal points */}
      {data?.points &&
        data?.points?.map((point) => (
          <div className="py-2 flex flex-row gap-4" key={point}>
            <div className="lg:mt-0.5">
              <AddBox className="text-primary-main"></AddBox>
            </div>
            <div className="body-normal text-left">{point}</div>
          </div>
        ))}
      {/* points with subPoints */}
      {data?.subPoints?.map((subpointPoint) => (
        <div key={subpointPoint} className="py-2 flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div className="lg:mt-0.5">
              <AddBox className="text-primary-main"></AddBox>
            </div>
            <div className="body-normal text-left">{subpointPoint.point}</div>
          </div>
          {subpointPoint?.subPoint?.map((subP, index) => (
            <div className="flex ml-10 flex-row gap-4" key={subP}>
              <RemoveCircle className="text-primary-main h-5 w-5 lg:mt-0.5"></RemoveCircle>
              <div className="body-small text-left">{subP}</div>
            </div>
          ))}
        </div>
      ))}
      {/* if points have a button */}
      {/* if points have a closing remarks  */}
      {data?.footer?.map((f) => (
        <div
          className="body-small p-4 font-semibold text-primary-main text-left"
          key={f}>
          {f}
        </div>
      ))}
      {data?.button && (
        <Button
          variant="contained"
          target="_blank"
          href={data?.button?.href}
          className="bg-primary-main mt-6 text-white">
          {data?.button?.text}
        </Button>
      )}
    </div>
  );
}

BulletPoints.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    desc: PropTypes.string,
    points: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ]),
    ),
    subPoints: PropTypes.arrayOf(
      PropTypes.shape({
        point: PropTypes.string,
        subPoint: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    button: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
    footer: PropTypes.arrayOf(PropTypes.string),
  }),
};
