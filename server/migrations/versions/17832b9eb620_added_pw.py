"""added pw

Revision ID: 17832b9eb620
Revises: e825f0fcbc58
Create Date: 2023-04-28 10:23:56.968648

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '17832b9eb620'
down_revision = 'e825f0fcbc58'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    with op.batch_alter_table('salons', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(), nullable=True))

    with op.batch_alter_table('salons', schema=None) as batch_op:
        batch_op.drop_column('image')

    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###
