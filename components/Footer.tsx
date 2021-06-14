import { SharedBasicInfo } from '../interfaces';

type Props = {
  sharedBasicInfo?: SharedBasicInfo
}

const Footer = ({ sharedBasicInfo }: Props) => {
  const now = new Date()
  const year = now.getFullYear()
  let networks: JSX.Element[]
  if (sharedBasicInfo) {
    networks = sharedBasicInfo.social.map((network) => (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class} />
        </a>
      </span>
    ))
  }

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              &copy;{' '}
              {year}{'. '}
              {sharedBasicInfo ?
                sharedBasicInfo.name :
                '???'}
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer