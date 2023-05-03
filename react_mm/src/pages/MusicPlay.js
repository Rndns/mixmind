import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { musicInfoList } from "../services/appServices";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import playlistadd from '../images/playlist-add.png';
import playlist from '../images/playlist.png';
import heart from '../images/heart.png';
import play from '../images/play.png';
import more from '../images/more.png';
import heartadd from '../images/heart-add.png';
import '../styles.css';

function MyVerticallyCenteredModal(props) {
  const location = useLocation();
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="custom-modal" 
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>곡 상세정보</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="lyricist">
        {/* 작사가 */}
        <b>작사</b> {location.state.musicInfo.lyricist}
      </div>
      <div className="composer">
        {/* 작곡가 */}
        <b>작곡</b> {location.state.musicInfo.composer}
      </div>
      <div className="arranger">
        {/* 편곡가 */}
        <b>편곡</b> {location.state.musicInfo.arranger}
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}><b>닫기</b></Button>
      </Modal.Footer>
    </Modal>
  );
}function Lyrics({ lyrics }) {
  return (
    <div>
      {lyrics ? (
        <p>{lyrics}</p>
      ) : (
        <p><b>가사정보가 등록되지 않은 곡입니다</b></p>
      )}
    </div>
  );
}
export default function MusicPlay() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const videoSrc = `https://www.youtube.com/embed/${location.state.musicInfo.youtubeId}`;
  // album "on the street (with J. Cole)"
  // albumImg "https://cdnimg.melon.co.kr/cm2/album/images/111/94/815/11194815_20230303100153_500.jpg?a15be10b9a5357904f33820c8311a0f9/melon/resize/282/quality/80/optimize"
  // arranger ""
  // artist "j-hope"
  // composer "['j-hope', 'Pdogg', 'J. Cole']"
  // genre "랩/힙합"
  // id 1
  // likes 43456
  // lyricist "['j-hope', 'Pdogg', 'J. Cole']"
  // lyrics "Every time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\n내 두 발은 선뜻 걸어, anywhere\nJ in the air\n가는 길이 희망이 되고자 하여,\n나 구태여\nEven my walk was made of\nyour love and your faith\n보답을 해, 저 멀리서라도 나비가 되어\nNow just walk lightly,\nwhenever you want\nGo on hopefully, wherever you walk\n누군가의 숨이 깃들어 있는 거리\n내 영혼과 영원을 담을게\nEverywhere (I’ll be)\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\nAll hail the mighty survivor of hell,\nPlopped down from heaven to sell\nHoly water that I scooped\nfrom the well\nFought tooth and a nail,\nJust to prevail mongst it’s ruthless\nAs I move through the field\nFeelin worried\nIn a hurry like a 2 minute drill\nTo make a couple mil\nOff a lucrative deal\nSelling train of thought,\nName a artist who could derail\nYou’ll never see it\nlike a n**** hula hoopin in jail\nI got a friend smart as f***,\nbut he stupid as hell\nHe swear that God ain’t real\nSince it ain’t no way to prove it his self\nAs if the universe ain’t enough,\nas if the volcanoes ain’t erupt\nAs if the birds don’t chirp,\nas if a trillion nerves don’t work\nin the human body\nWho would I be?\nWithout the creator of this theater\nBeside me to gently guide me?\nSomedays I wonder\nif I need to pick a different hobby\nI’m deep in with this rappin\nIt’s all a n**** know\nI never didn’t nothin better,\nit’s hard to let it go\nBut like a father,\nwatching his daughter,\nwalk down the altar,\nWith tears in his eyes,\nyou gotta let her grow\nAnd so I shall,\nbut first I been honing my style\nColdest around,\nwith more quotables than\nwhat the quota allows\nYou see a top 10 list\nI see a Golden Corral, n****\nAs the moon jumps over the cow\nI contemplate if I should\nwait to hand over the crown\nAnd stick around for a bit longer\nI got a strange type of hunger\nThe more I eat the more\nit gets stronger,\nThe more it gets stronger\nI said the more it gets stronger\nj-hope\nCole World\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)"
  // releasedDate "2023-03-03"
  // title "on the street (with J. Cole)"
  // youtudeId "dummeyID"

  return (
    <div className="musicplaypage">
      <div className="details">
        <Container>
          <Row>
            <div className="alb-img">
              {/* 앨범 이미지 */}
              <img src={location.state.musicInfo.albumImg} alt='albumImg'/>
              <Row>
                <div className="title">
                  {/* 제목 */}
                  <b>{location.state.musicInfo.title}</b>
                </div>
                <div className="artist">
                  {/* 아티스트 */}
                  <b>{location.state.musicInfo.artist}</b>
                </div>
                <div className="album">
                  {/* 앨범명 */}
                  <b>{location.state.musicInfo.album}</b>
                </div>
                <div className="date">
                  {/* 발매일 */}
                  <b>{location.state.musicInfo.releasedDate}</b>
                </div>
                <div className="genre">
                  {/* 장르 클릭하면 장르 페이지로 갈 수 있도록 제작 요망*/}
                  <Link to="/electronic"><b>#{location.state.musicInfo.genre}</b></Link>
                </div>
              </Row>
              <div className="button-group">
                <img src={play} class="play" alt={"재생하기"} title={"재생하기"}
                onClick={() => {navigate('/')}}/>
                <img src={playlistadd} class="playlist-add" alt={"플레이리스트에 추가"} title={"플레이리스트에 추가"}
                onClick={() => {navigate('/')}}/>
                <img src={playlist} class="playlist" alt={"플레이리스트 확인"} title={"플레이리스트 확인"}
                onClick={() => {navigate('/musicPlayList')}}/>
                <img src={heart} class="heart" alt={"좋아요 누르기"} title={"좋아요 누르기"}
                onClick={() => {navigate('/')}}/>
                <img src={more} class="more" alt={"상세정보 보기"} title={"상세정보 보기"}
                  onClick={() => setModalShow(true)}/> {/*  onClick={() => setShowModal(true)} */}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
              {/* 좋아요 */}
              {/* {location.state.musicInfo.likes} */}
          </Row>
        </Container>
        <div className="lyrics">
          {/* 가사 */}
          <Lyrics lyrics={location.state.musicInfo.lyrics}/>
        </div>
        <div className="youtube">
          <b>YouTube로 감상하기</b>
          <iframe width="480" height="270" src={videoSrc} title={location.state.musicInfo.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class='v-line'></div>
        </div>
      </div>
    </div>
  );
}