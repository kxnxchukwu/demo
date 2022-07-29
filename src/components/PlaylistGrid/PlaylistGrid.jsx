import styles from './PlaylistGrid.module.scss';
import classNames from 'classnames';
import { formatDuration } from '../../utils';

const TrackList = ({ tracks }) => (
  <>
    {tracks && tracks.length ? (
      <ul lg={12}>
        {tracks.map((track, i) => (
          <li className={styles.track__item} key={i}>
            <div className={styles.track__item__num}>{i + 1}</div>
            <div className={classNames(styles.track__item__title_group, "d-flex", "justify-content-between")}>
                <div className={styles.track__item__img}>
                  <img src={`https://i.scdn.co/image/ab67616d00001e02f319950b3286ff2ea710571e`} alt={track.name} width="40px" height="40px" />
                </div>
              <div className={styles.track__item__name_artist}>
                <div className={classNames(styles.track__item__name, styles.overflow_ellipsis)}>
                  {track.name}
                </div>
                <div className={classNames(styles.track__item__artist, styles.overflow_ellipsis)}>
                  {track.artists.map((artist, i) => (
                    <span key={i}>
                      {artist.name}{i !== track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={classNames(styles.track__item__album, styles.overflow_ellipsis)}>
              {track.album.name}
            </div>
            <div className={styles.track__item__duration}>
              {formatDuration(154800)}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.empty_notice}>No tracks available</p>
    )}
  </>
);

export default TrackList;