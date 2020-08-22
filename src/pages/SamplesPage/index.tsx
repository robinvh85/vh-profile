import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { MainTemplate } from "components";
import { fetchSamplesData } from 'store/samples/actions';

const renderSample = (samples: any) => {
  return samples.map((sample: any, index: number) => {
    return (<div key={index}>
        { `ID: ${sample.id} - NAME: ${sample.name}` }
      </div>
    )
  })
}

const SamplesPage = (props: any) => {
  const { samples, fetchSamplesData } = props;

  useEffect(() => {
    fetchSamplesData();
  }, [fetchSamplesData]);

  return (
    <MainTemplate>
      <div>
        <h2>Samples</h2>
        <div>
          { renderSample(samples) }
        </div>
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    samples: state.getIn(['samples', 'list', 'data'])
  }
}

const mapDispatchToProps = {
  fetchSamplesData
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplesPage);
