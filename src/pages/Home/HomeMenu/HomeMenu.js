import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { withTranslation } from 'react-i18next';

const { TabPane } = Tabs;


 class Demo extends React.PureComponent {


    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {

    }

    renderHeThongRap = () => {
        const { t } = this.props;
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane  tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '350px', display: 'flex' }} >
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                                <div className="text-left ml-2 font-mono">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-200 font-mono text-yellow-400">{t('detail')}</p>
                                </div>
                            </div>
                        }
                            key={index}>
                            {/*Load phim tương ứng */}
                            {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-2" >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                            <div className="ml-2">
                                                <h1 className="text-xl text-green-700 font-mono" >{phim.tenPhim}</h1>
                                                <p className='font-mono'>{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-lg font-mono text-green-400 hover:text-yellow-500" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}


                        </TabPane>

                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {
        const { t } = this.props;
        const { tabPosition } = this.state;
        return (
            <Fragment>
                <div className='pb-6'>
                    <h2 className='text-center text-2xl pb-5 text-yellow-500 font-mono font-bold'>{t('system')}</h2>
                    <Tabs tabPosition={tabPosition} className='border border-yellow-500 rounded-md '>
                        {this.renderHeThongRap()}
                    </Tabs>
                </div>
            </Fragment>
        );
    }
}

export default withTranslation()(Demo)

