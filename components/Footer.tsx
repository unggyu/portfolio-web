import { FooterProps, FooterSocialsProps } from 'portfolio-web';

const Footer = ({
  shared_basic_info: sharedBasicInfo,
  shared_basic_info: { social }
}: FooterProps) => (
  <footer>
    <div className="col-md-12">
      <div className="social-links">
        <Networks socials={social} />
      </div>
      <div className="copyright py-4 text-center">
        <div className="container">
          <small>
            &copy;{' '}
            {(new Date()).getFullYear()}{'. '}
            {sharedBasicInfo ?
              sharedBasicInfo.name :
              '???'}
          </small>
        </div>
      </div>
    </div>
  </footer>
)

const Networks = ({ socials }: FooterSocialsProps) => (
  <>
    {socials.map(({ name, url, class_name }) => (
      <span key={name} className="m-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <i className={class_name} />
        </a>
      </span>
    ))}
  </>
)

export default Footer