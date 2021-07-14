import { FooterProps, FooterSocialsProps } from 'portfolio-web';

const Footer = ({
  sharedBasicInfo,
  sharedBasicInfo: { social }
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
    {socials.map((network) => (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class} />
        </a>
      </span>
    ))}
  </>
)

export default Footer