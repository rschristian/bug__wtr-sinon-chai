import * as chai from 'chai';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.use(sinonChai);

it('should report an error on failed sinon assertion', () => {
    const fk = sinon.fake(() => console.log('fake'));

    fk();

    expect(fk).not.to.have.been.called;
});
